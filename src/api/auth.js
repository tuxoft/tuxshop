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
    return fetch("http://localhost:4000/logout");
  },
  getCurrentUser: () => {
    return fetch("http://localhost:4000/user", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => res.user);
  }
};

export default Auth;
