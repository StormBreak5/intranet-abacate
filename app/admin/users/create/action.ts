
'use server'

import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export async function createUser(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const roleRaw = formData.get('role') as string

    // Simple validation
    if (!email || !password || !roleRaw) {
        return { error: 'Missing required fields' }
    }

    // Check unique
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
        return { error: 'User with this email already exists' }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: roleRaw as any, // Assuming valid role from select
            },
        })
    } catch (e) {
        console.error(e)
        return { error: 'Failed to create user' }
    }

    redirect('/admin/users')
}
