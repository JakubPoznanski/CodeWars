//https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  let delHttp =
    url.slice(0, 3) === "htt" ? url.slice(url.indexOf("/") + 2) : url;
  if (delHttp.slice(0, 3) === "www") {
    delHttp = delHttp.slice(delHttp.indexOf(".") + 1);
  }
  const domain = delHttp.slice(0, delHttp.indexOf("."));
  return domain;
}
