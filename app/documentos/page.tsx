'use client';

import { useState } from 'react';
import { Folder, FileText, Download, ChevronRight, Home, ArrowLeft } from 'lucide-react';

type Arquivo = {
    id: number;
    nome: string;
    tipo: 'folder' | 'pdf' | 'excel' | 'word';
    tamanho?: string;
    data: string;
};

// MOCKS
const mockArquivos: Record<string, Arquivo[]> = {
    root: [
        { id: 1, nome: "Recursos Humanos", tipo: "folder", data: "10/01/2026" },
        { id: 2, nome: "Marketing & Vendas", tipo: "folder", data: "12/01/2026" },
        { id: 3, nome: "TI & Suporte", tipo: "folder", data: "15/01/2026" },
        { id: 4, nome: "Política de Privacidade.pdf", tipo: "pdf", tamanho: "2.4 MB", data: "01/01/2026" },
    ],
    "Recursos Humanos": [
        { id: 5, nome: "Formulários", tipo: "folder", data: "10/01/2026" },
        { id: 6, nome: "Manual do Colaborador.pdf", tipo: "pdf", tamanho: "5.1 MB", data: "20/01/2026" },
        { id: 7, nome: "Calendário de Feriados 2026.xlsx", tipo: "excel", tamanho: "12 KB", data: "02/01/2026" },
    ],
    "Formulários": [
        { id: 8, nome: "Reembolso de KM.docx", tipo: "word", tamanho: "45 KB", data: "10/02/2026" },
        { id: 9, nome: "Solicitação de Férias.pdf", tipo: "pdf", tamanho: "1.2 MB", data: "11/02/2026" },
    ]
};

export default function DocumentosPage() {
    const [caminhoAtual, setCaminhoAtual] = useState<string[]>([]);
    const pastaAtual = caminhoAtual.length === 0 ? 'root' : caminhoAtual[caminhoAtual.length - 1];
    const arquivos = mockArquivos[pastaAtual] || [];

    const abrirPasta = (nomePasta: string) => {
        setCaminhoAtual([...caminhoAtual, nomePasta]);
    };

    const voltar = () => {
        setCaminhoAtual(caminhoAtual.slice(0, -1));
    };

    const irParaInicio = () => setCaminhoAtual([]);

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Documentos</h1>
                    <p className="text-gray-500">Acesse manuais, políticas e modelos da Sotrigo.</p>
                </div>
            </div>

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

                {caminhoAtual.length > 0 && (
                    <button onClick={voltar} className="ml-auto text-gray-400 hover:text-gray-800 flex items-center gap-1 text-xs uppercase font-bold">
                        <ArrowLeft size={14} /> Voltar
                    </button>
                )}
            </div>

            <div className="bg-white p-6 rounded-b-xl shadow-sm min-h-[400px]">
                {arquivos.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <Folder size={48} className="mx-auto mb-4 opacity-20" />
                        <p>Esta pasta está vazia.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {arquivos.map((arquivo) => (
                            <div
                                key={arquivo.id}
                                onClick={() => arquivo.tipo === 'folder' ? abrirPasta(arquivo.nome) : alert(`Baixando ${arquivo.nome}...`)}
                                className={`
                    p-4 rounded-xl border border-gray-100 flex items-center gap-4 cursor-pointer transition-all group
                    ${arquivo.tipo === 'folder' ? 'bg-orange-50/50 hover:bg-orange-100 hover:border-orange-200' : 'hover:shadow-md hover:border-gray-300'}
                `}
                            >
                                <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold
                    ${arquivo.tipo === 'folder' ? 'bg-sotrigo-orange' :
                                        arquivo.tipo === 'pdf' ? 'bg-red-500' :
                                            arquivo.tipo === 'excel' ? 'bg-green-600' : 'bg-blue-600'}
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}