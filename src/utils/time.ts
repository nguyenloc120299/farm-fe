export function getTimeLeft(createdAt: number, totalTime: number) {
  const secondsElapsed = Date.now() / 1000 - createdAt;
  if (secondsElapsed > totalTime) {
    return 0;
  }
  return totalTime - secondsElapsed;
}
