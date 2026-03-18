import { useState, useEffect, useRef } from "react"
import { useNavigate, Form, redirect, useActionData, useNavigation, Navigate } from "react-router-dom"
import { loginUser, isAuthenticated, saveAuth } from "../utils/auth"

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

//This request is deconstructed to return a request param
export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        await loginUser({ email, password })
        return redirect("/")
    } catch (error) {
        return { error: error.message || "Login failed" }
    }
}

export default function LoginPage() {
    const navigation = useNavigation()
    const navigate = useNavigate()
    const googleButtonRef = useRef(null)
    const [googleLoading, setGoogleLoading] = useState(false)
    const [googleError, setGoogleError] = useState("")

    useEffect(() => {
        if (!window.google || !googleButtonRef.current) return

        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleGoogleCredentialResponse,
        })

        googleButtonRef.current.innerHTML = ""

        window.google.accounts.id.renderButton(googleButtonRef.current, {
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "rectangular",
            width: 320,
        })
    }, [])

    async function handleGoogleCredentialResponse(response) {
        try {
            setGoogleLoading(true)
            setGoogleError("")

            const res = await fetch("http://localhost:5000/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    credential: response.credential,
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || "Google login failed")
            }

            // Save whatever auth shape your app uses
            // Adjust this if your backend returns a token/session differently
            saveAuth({
                user: data.user,
                provider: "google",
            })

            navigate("/")
        } catch (error) {
            setGoogleError(error.message || "Google sign-in failed")
            console.error("Google sign-in error:", error)
        } finally {
            setGoogleLoading(false)
        }
    }

    if (isAuthenticated()) {
        return <Navigate to="/" replace />
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
                        <Form method="post" className="space-y-4">
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
                        </Form>

                        <div className="mt-6">
                            <Separator className="my-4" />

                            <p className="text-center text-sm text-muted-foreground mb-3">
                                Or continue with
                            </p>

                            <div className="flex justify-center">
                                <div ref={googleButtonRef} />
                            </div>

                            {googleLoading && (
                                <p className="text-sm text-muted-foreground text-center mt-3">
                                    Signing in with Google...
                                </p>
                            )}

                            {googleError && (
                                <p className="text-sm text-red-500 text-center mt-3">
                                    {googleError}
                                </p>
                            )}
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