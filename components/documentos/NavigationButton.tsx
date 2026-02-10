import { ArrowLeft } from 'lucide-react';

interface NavigationButtonProps {
    caminhoAtual: string[];
    voltar: () => void;
}

export function NavigationButton({ caminhoAtual, voltar }: NavigationButtonProps) {
    if (caminhoAtual.length === 0) return null;

    return (
        <button
            onClick={voltar}
            className="ml-auto text-gray-400 hover:text-gray-800 flex items-center gap-1 text-xs uppercase font-bold"
        >
            <ArrowLeft size={14} /> Voltar
        </button>
    );
}
