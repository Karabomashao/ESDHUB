import { useState, useEffect} from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { loginWithGoogle, getCurrentUser} from "../utils/auth"

import { 
    Card, 
    CardHeader, 
    CardTitle,
    CardDescription,
    CardContent 
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// //This request is deconstructed to return a request param
// export async function action({ request }) {
//     const formData = await request.formData()
//     const email = formData.get("email")
//     const password = formData.get("password")

//     try {
//         await loginUser({ email, password })
//         return redirect("/")
//     } catch (error) {
//         return { error: error.message || "Login failed" }
//     }
// }

export default function LoginPage() {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



  useEffect(() => {
    let mounted = true

    async function checkSession() {
      try {
        const user = await getCurrentUser()

        if (!mounted) return

        if (user) {
          navigate("/", { replace: true })
          return
        }

        setLoading(false)
      } catch (error) {
        console.error("Session check failed:", error)
        if (mounted) setLoading(false)
      }
    }

    checkSession()

    return () => {
      mounted = false
    }
  }, [navigate])

  if (loading) {
    return <p>Checking session...</p>
  }
    
    return (

        <div className="min-h-screen flex items-center justify-center bg-bg-alt p-4">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center mb-4">
                        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-primary-foreground">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                            <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1 className="text-3xl mb-2">DP World ESD Hub</h1>
                    <p className="text-muted-foreground">Enterprise & Supplier Development Platform</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                        <CardDescription>Sign in to your account to continue</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {/* <Form method="post" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    name="password"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="rounded" />
                                    Remember me
                                </label>

                                <Button variant="link" className="p-0 h-auto text-sm" type="button">
                                    Forgot password?
                                </Button>
                            </div>

                            <Button type="submit" className="w-full" disabled={navigation.state === "submitting"}>
                                {navigation.state === "submitting" ? "Signing in..." : "Sign in"}
                            </Button>
                        </Form> */}

                        <div className="mt-6">
                            <Separator className="my-4" />

                            <p className="text-center text-sm text-muted-foreground mb-3">
                                Or continue with
                            </p>

                            <div className="flex justify-center">
                                {/* <div ref={googleButtonRef} /> */}
                                <button onClick={loginWithGoogle}>Sign in with Google</button>

                            </div>

                        </div>

                        <p className="mt-6 text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Button variant="link" className="p-0 h-auto" type="button">
                                Request access
                            </Button>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}