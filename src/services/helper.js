const userAccount = {
  username: "postnzt",
  password: "password"
};

export const checkLoginCredentials = (username, password) => {
  if (userAccount.username === username && userAccount.password === password) {
    return true;
  }
  return false;
};