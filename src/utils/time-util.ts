export default function formatDuration(secondsString: string): string {
  const totalSeconds = parseInt(secondsString, 10);
  if (isNaN(totalSeconds) || totalSeconds <= 0) return "0m";

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}
