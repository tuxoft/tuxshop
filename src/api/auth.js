const Auth = {
  login: credentials => {
    const { email, password } = credentials;

    return fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  logout: () => {
    return fetch("http://localhost:4000/logout", { credentials: "include" });
  },
  getCurrentUser: () => {
    return fetch("http://localhost:4000/user", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export default Auth;
