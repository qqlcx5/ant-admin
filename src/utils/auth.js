export function getCurrentAuthority() {
  // return ["user"];
  return ["user", "admin"];
}
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
