
'use server'

import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { sign } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { error: 'Please enter email and password' }
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return { error: 'Invalid credentials' }
    }

    const token = await sign({ userId: user.id, email: user.email, role: user.role })
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)

    const cookieStore = await cookies()
    cookieStore.set('session', token, {
        httpOnly: true,
        expires,
        path: '/',
        // secure: process.env.NODE_ENV === 'production', // commented out for local dev if needed, or leave it
    })

    redirect('/admin/users')
}
