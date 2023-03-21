//https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript
function humanReadable(seconds) {
  let now = new Date(0, 0, 0);
  now.setTime(now.getTime() + seconds * 1000);
  const afterday = now.getDay();
  const hours = now.getHours() + afterday * 24;
  const minutes = now.getMinutes();
  const sec = now.getSeconds();
  const format = (x) => x.toString().padStart(2, 0);
  return `${format(hours)}:${format(minutes)}:${format(sec)}`;
}
