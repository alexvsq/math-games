export default function secondsToMinutes(times) {
    const minutes = Math.floor(times / 60);
    const seconds = times % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
