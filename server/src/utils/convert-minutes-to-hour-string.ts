// 1080 -> 18:00

export function convertMinutesToHourString(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hourString = `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
  return hourString;
}