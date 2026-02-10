import { Folder, FileText, Download } from 'lucide-react';
import { Arquivo } from '@/types';

interface FileCardProps {
    arquivo: Arquivo;
    onOpen: (nome: string) => void;
}

export function FileCard({ arquivo, onOpen }: FileCardProps) {
    const handleClick = () => {
        if (arquivo.tipo === 'folder') {
            onOpen(arquivo.nome);
        } else {
            alert(`Baixando ${arquivo.nome}...`);
        }
    };

    const getIconColor = () => {
        switch (arquivo.tipo) {
            case 'folder':
                return 'bg-sotrigo-orange';
            case 'pdf':
                return 'bg-red-500';
            case 'excel':
                return 'bg-green-600';
            case 'word':
                return 'bg-blue-600';
            default:
                return 'bg-gray-500';
        }
    };

    const getCardStyle = () => {
        return arquivo.tipo === 'folder'
            ? 'bg-orange-50/50 hover:bg-orange-100 hover:border-orange-200'
            : 'hover:shadow-md hover:border-gray-300';
    };

    return (
        <div
            onClick={handleClick}
            className={`
                p-4 rounded-xl border border-gray-100 flex items-center gap-4 cursor-pointer transition-all group
                ${getCardStyle()}
            `}
        >
            <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold
                ${getIconColor()}
            `}>
                {arquivo.tipo === 'folder' ? <Folder size={20} /> : <FileText size={20} />}
            </div>

            <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate text-sm group-hover:text-sotrigo-orange transition-colors">
                    {arquivo.nome}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    {arquivo.tipo === 'folder' ? arquivo.data : arquivo.tamanho}
                </p>
            </div>

            {arquivo.tipo !== 'folder' && (
                <button className="text-gray-300 hover:text-sotrigo-green">
                    <Download size={18} />
                </button>
            )}
        </div>
    );
}
