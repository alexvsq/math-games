import ConnectionDB from '../database/data';

export async function saveInfoGameOver(info) {
    try {
        const { gameName, level, points, duration } = info;
        const db = await ConnectionDB();

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS scores (
                id INTEGER PRIMARY KEY NOT NULL,
                gameName TEXT,
                level INTEGER,
                points INTEGER,
                duration INTEGER
            )
        `);

        const existingRecord = await db.getFirstAsync(`
            SELECT * FROM scores WHERE gameName = ?
        `, [gameName]);

        if (existingRecord) {
            console.log('Registro existente encontrado:', existingRecord);

            // Comparar y actualizar independientemente
            const newLevel = Math.max(level, existingRecord.level);
            const newPoints = Math.max(points, existingRecord.points);
            const newDuration = Math.max(duration, existingRecord.duration);

            // Actualizar el registro existente
            const result = await db.runAsync(`
                UPDATE scores SET level = ?, points = ?, duration = ?
                WHERE gameName = ?
            `, [newLevel, newPoints, newDuration, gameName]);

            console.log('Registro actualizado:', result);
        } else {
            // Insertar un nuevo registro si no existe
            const result = await db.runAsync(`
                INSERT INTO scores (gameName, level, points, duration)
                VALUES (?, ?, ?, ?)
            `, [gameName, level, points, duration]);

            console.log('Nuevo registro insertado:', result);
        }
    } catch (error) {
        console.log('Error al guardar la información:', error);
    }
}
/* await db.execAsync(`
     PRAGMA journal_mode = WAL;
     CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
     INSERT INTO test (value, intValue) VALUES ('test1', 123);
     INSERT INTO test (value, intValue) VALUES ('test2', 456);
     INSERT INTO test (value, intValue) VALUES ('test3', 789);
     `); */