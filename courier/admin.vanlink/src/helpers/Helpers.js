export const getToken = () => {
  const Token = localStorage.getItem("Token");
  return Token;
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
