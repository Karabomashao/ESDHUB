// ==============================
// Email + Password Login
// ==============================
export function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        const user = {
          email,
          provider: "local",
        };

        localStorage.setItem("isAuth", "true");
        localStorage.setItem("user", JSON.stringify(user));

        resolve(user);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
}


// ==============================
// Save Google Login
// ==============================
export function saveAuth({ user, provider = "google" }) {
  localStorage.setItem("isAuth", "true");

  localStorage.setItem(
    "user",
    JSON.stringify({
      ...user,
      provider,
    })
  );
}


// ==============================
// Get Current User
// ==============================
export function getCurrentUser() {
  const rawUser = localStorage.getItem("user");
  return rawUser ? JSON.parse(rawUser) : null;
}


// ==============================
// Check Authentication
// ==============================
export function isAuthenticated() {
  return localStorage.getItem("isAuth") === "true";
}


// ==============================
// Logout User
// ==============================
export function logoutUser() {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("user");
}