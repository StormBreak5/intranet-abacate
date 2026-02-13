import prisma from './lib/prisma'

async function main() {
    console.log('Connecting to database...')
    try {
        const post = await prisma.post.create({
            data: {
                title: 'Teste de Integração',
                summary: 'Resumo do teste',
                content: '<p>Conteúdo do teste</p>',
                date: new Date().toISOString(),
                tag: 'Teste',
                tagColor: 'bg-blue-500',
            },
        })
        console.log('Created post:', post)

        const allPosts = await prisma.post.findMany()
        console.log('All posts:', allPosts)
    } catch (e) {
        console.error('Error connecting to database:', e)
    } finally {
        // @ts-ignore - Prisma 7 doesn't strictly need explicit disconnect but good practice
        if (prisma.$disconnect) await prisma.$disconnect()
    }
}

main()
