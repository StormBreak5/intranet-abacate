
import Link from 'next/link'
import prisma from '@/lib/prisma'

export default async function UsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Users Management</h1>
                <Link
                    href="/admin/users/create"
                    className="rounded bg-blue-600 px-4 py-2 font-bold text-white shadow hover:bg-blue-700 focus:outline-none"
                >
                    + Create New User
                </Link>
            </div>

            <div className="overflow-x-auto rounded-lg bg-white shadow">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-left text-sm uppercase leading-normal text-gray-600">
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light text-gray-600">
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="whitespace-nowrap px-6 py-3 font-medium">{user.id}</td>
                                <td className="px-6 py-3">{user.name || '-'}</td>
                                <td className="px-6 py-3">{user.email}</td>
                                <td className="px-6 py-3">
                                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${user.role === 'ADMIN' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {users.length === 0 && (
                    <div className="p-6 text-center text-gray-500">No users found.</div>
                )}
            </div>
        </div>
    )
}
