import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    caminhoAtual: string[];
    irParaInicio: () => void;
}

export function Breadcrumb({ caminhoAtual, irParaInicio }: BreadcrumbProps) {
    return (
        <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex items-center gap-2 text-sm text-gray-600 shadow-sm">
            <button onClick={irParaInicio} className="hover:text-sotrigo-orange flex items-center gap-1">
                <Home size={16} /> Início
            </button>

            {caminhoAtual.map((pasta, index) => (
                <div key={pasta} className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-gray-400" />
                    <span className={index === caminhoAtual.length - 1 ? "font-bold text-sotrigo-orange" : ""}>
                        {pasta}
                    </span>
                </div>
            ))}
        </div>
    );
}
