import { NextAuthOptions, User, getServerSession} from "next-auth"
import {useSession} from "next-auth/react"
import {redirect} from "next/navigation"
import CredentialsProvider from "next-auth/providers/credentials" 
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authConfig : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email:{
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {label: "Password" ,type: "password"},
            },
            authorize: async (credentials, req) => {
                // Add your own authorization logic here
                // For example, you might call an external API endpoint using credentials.email and credentials.password
                // This endpoint could then return a user object if the credentials are valid
                // The user object will be saved in a session and available in your Next.js API routes and on the client side
                // If the credentials are invalid or the API request fails, throw an error
                // The thrown error message will be displayed on the sign in page
                const user = { id: '1', name: 'Admin' }; // This is an example. You should fetch the user based on the credentials
                if (user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            },
            }),
            GoogleProvider({
                clientId: "535919551284-85alo3dhv0i8n540po2osqq3dvh36jim.apps.googleusercontent.com",
                clientSecret: "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",
            })
    ],
}