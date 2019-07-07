function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [1, 43, 21, 56, 88, 66];
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = chart;
