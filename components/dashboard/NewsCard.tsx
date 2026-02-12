import { Noticia } from '@/types';
import Link from 'next/link';

interface NewsCardProps {
    noticia: Noticia;
}

export function NewsCard({ noticia }: NewsCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Thumbnail Image */}
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                    {noticia.imagem ? (
                        <img
                            src={noticia.imagem}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sotrigo-green to-green-700" />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col">
                    <div className={`text-xs font-bold text-white px-2 py-1 rounded uppercase tracking-wide ${noticia.corTag} w-fit mb-3`}>
                        {noticia.tag}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{noticia.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-3 flex-1">{noticia.resumo}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Publicado em {noticia.data}</span>
                        <Link
                            href={`/posts/${noticia.id}`}
                            className="text-sotrigo-green font-semibold text-sm hover:underline"
                        >
                            Ler mais →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
