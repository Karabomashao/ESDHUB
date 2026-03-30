const API_BASE = "http://localhost:4000"

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE}/auth/session`, {
    credentials: "include",
  })

  const session = await res.json()
  return session?.user || null
}

export async function isAuthenticated() {
  const user = await getCurrentUser()
  return !!user
}

export function loginWithGoogle() {
  window.location.href =
    `${API_BASE}/auth/signin?callbackUrl=http://localhost:5173/`
}

export function logoutUser() {
  window.location.href =
    `${API_BASE}/auth/signout?callbackUrl=http://localhost:5173/login`
}