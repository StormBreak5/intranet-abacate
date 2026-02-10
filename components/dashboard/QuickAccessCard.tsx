import { Sistema } from '@/types';

interface QuickAccessCardProps {
    sistema: Sistema;
}

export function QuickAccessCard({ sistema }: QuickAccessCardProps) {
    return (
        <a
            href={sistema.url}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-sotrigo-green transition group"
        >
            <span className="text-4xl group-hover:scale-110 transition-transform">
                {sistema.icone}
            </span>
            <span className="font-medium text-gray-700">{sistema.nome}</span>
        </a>
    );
}
