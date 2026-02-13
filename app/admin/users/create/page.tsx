
'use client'

import { useActionState } from 'react'
import { createUser } from './action'

export default function CreateUserPage() {
    const [state, action, isPending] = useActionState(createUser, undefined)

    return (
        <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Create New User</h1>

            {state?.error && (
                <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                    {state.error}
                </div>
            )}

            <form action={action}>
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="role">
                        Role <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="role"
                        name="role"
                        defaultValue="USER"
                        required
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>

                <div className="flex items-center justify-end">
                    <button
                        className="focus:shadow-outline rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? 'Creating...' : 'Create User'}
                    </button>
                </div>
            </form>
        </div>
    )
}
