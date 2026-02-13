
import 'dotenv/config'
import prisma from '../lib/prisma'
import { Role } from '../generated/prisma/client'
import bcrypt from 'bcryptjs'



async function main() {
    const adminEmail = 'admin@sotrigo.com'
    const adminPassword = 'admin'
    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Admin',
            password: hashedPassword,
            role: Role.ADMIN,
        },
    })

    console.log({ admin })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
