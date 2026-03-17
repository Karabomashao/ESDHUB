export function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("isAuth", "true");
        resolve({ email });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
}

export function isAuthenticated() {
  return localStorage.getItem("isAuth") === "true";
}

export function logoutUser() {
  localStorage.removeItem("user")
}