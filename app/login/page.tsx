
'use client'

import { useActionState } from 'react'
import { login } from './action'

export default function LoginPage() {
    const [state, action, isPending] = useActionState(login, undefined)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form action={action} className="w-full max-w-sm rounded bg-white p-6 shadow-md">
                <h2 className="mb-4 text-center text-xl font-bold">Login</h2>
                {state?.error && <p className="mb-4 text-red-500">{state.error}</p>}
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="admin@sotrigo.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">Password</label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="admin"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? 'Logging in...' : 'Sign In'}
                    </button>
                </div>
            </form>
        </div>
    )
}
