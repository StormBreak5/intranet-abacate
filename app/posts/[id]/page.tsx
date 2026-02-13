import { Noticia } from '@/types';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function PostReadingPage({ params }: PageProps) {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
        notFound();
    }

    const postDB = await prisma.post.findUnique({
        where: { id: postId }
    });

    if (!postDB) {
        return (
            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Postagem não encontrada</h1>
                    <p className="text-gray-600 mb-6">A postagem que você está procurando não existe.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-sotrigo-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                    >
                        <ArrowLeft size={20} />
                        Voltar ao Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    const post: Noticia = {
        id: postDB.id,
        titulo: postDB.title,
        resumo: postDB.summary,
        conteudo: postDB.content,
        data: postDB.date,
        tag: postDB.tag,
        corTag: postDB.tagColor,
        imagem: postDB.image || undefined
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sotrigo-green hover:text-green-700 font-semibold mb-6 transition"
            >
                <ArrowLeft size={20} />
                Voltar ao Dashboard
            </Link>

            {/* Article */}
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Image or Gradient */}
                {post.imagem ? (
                    <div className="relative h-64 md:h-80 lg:h-96">
                        <img
                            src={post.imagem}
                            alt={post.titulo}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`${post.corTag} text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide`}>
                                    {post.tag}
                                </span>
                                <div className="flex items-center gap-2 text-white/90">
                                    <Calendar size={16} />
                                    <span className="text-sm">{post.data}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">{post.titulo}</h1>
                            <p className="text-lg text-white/90 mt-4">{post.resumo}</p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-sotrigo-green to-green-600 p-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`${post.corTag} text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide`}>
                                {post.tag}
                            </span>
                            <div className="flex items-center gap-2 text-green-100">
                                <Calendar size={16} />
                                <span className="text-sm">{post.data}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.titulo}</h1>
                        <p className="text-lg text-green-100 mt-4">{post.resumo}</p>
                    </div>
                )}

                {/* Content */}
                <div className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        {/<[a-z][\s\S]*>/i.test(post.conteudo) ? (
                            <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
                        ) : (
                            post.conteudo.split('\n').map((paragraph, index) => {
                                if (paragraph.trim() === '') {
                                    return <div key={index} className="h-4" />;
                                }

                                // Check if it's a heading (starts with **)
                                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                                    const heading = paragraph.trim().slice(2, -2);
                                    return (
                                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                            {heading}
                                        </h2>
                                    );
                                }

                                // Check if it's a list item (starts with - or number.)
                                if (paragraph.trim().startsWith('-') || /^\d+\./.test(paragraph.trim())) {
                                    return (
                                        <ul key={index} className="list-disc ml-6">
                                            <li className="text-gray-700 leading-relaxed">
                                                {paragraph.trim().replace(/^[-\d.]\s*/, '')}
                                            </li>
                                        </ul>
                                    );
                                }

                                // Regular paragraph
                                return (
                                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sotrigo-green hover:text-green-700 font-semibold transition"
                    >
                        <ArrowLeft size={18} />
                        Voltar às notícias
                    </Link>
                </div>
            </article>
        </div>
    );
}
