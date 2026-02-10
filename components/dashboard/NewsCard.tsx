import { Noticia } from '@/types';

interface NewsCardProps {
    noticia: Noticia;
}

export function NewsCard({ noticia }: NewsCardProps) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col md:flex-row gap-4 items-start">
            <div className={`text-xs font-bold text-white px-2 py-1 rounded uppercase tracking-wide ${noticia.corTag}`}>
                {noticia.tag}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{noticia.titulo}</h3>
                <p className="text-gray-600 text-sm mb-2">{noticia.resumo}</p>
                <span className="text-xs text-gray-400">Publicado em {noticia.data}</span>
            </div>
            <button className="text-sotrigo-green font-semibold text-sm hover:underline self-end md:self-center">
                Ler mais →
            </button>
        </div>
    );
}
