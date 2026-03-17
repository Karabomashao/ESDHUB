import { useState } from "react"
import { useNavigate, Form, redirect, useActionData, useNavigation, Navigate } from "react-router-dom"
import { loginUser, isAuthenticated } from "../utils/auth"

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
export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        await loginUser({email, password})
        return redirect("/")
    } catch (error){
        return {error: error.message || "Login failed"}
    }
}


export default function LoginPage(){
    const actionData = useActionData()
    const navigation= useNavigation()
    
    const isSubmiting = navigation.state === "submitting"

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
                    <Button variant="link" className="p-0 h-auto text-sm">
                    Forgot password?
                    </Button>
                </div>
                <Button type="submit" className="w-full">
                    Sign in
                </Button>
                </Form>

                <div className="mt-6">
                <Separator className="my-4" />
                <p className="text-center text-sm text-muted-foreground mb-3">
                    Or continue with
                </p>
                <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    </svg>
                    Sign in with Google
                </Button>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button variant="link" className="p-0 h-auto">
                    Request access
                </Button>
                </p>
            </CardContent>
            </Card>
        </div>
        </div>
  )
}