'use client';

import { useFileNavigation } from '@/hooks/useFileNavigation';
import { mockArquivos } from '@/types/mocks';
import { Breadcrumb } from '@/components/documentos/Breadcrumb';
import { NavigationButton } from '@/components/documentos/NavigationButton';
import { EmptyFolder } from '@/components/documentos/EmptyFolder';
import { FileCard } from '@/components/documentos/FileCard';

export default function DocumentosPage() {
    const { caminhoAtual, pastaAtual, abrirPasta, voltar, irParaInicio } = useFileNavigation();
    const arquivos = mockArquivos[pastaAtual] || [];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Documentos</h1>
                    <p className="text-sm sm:text-base text-gray-500">Acesse manuais, políticas e modelos da Sotrigo.</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex items-center gap-2 text-sm text-gray-600 shadow-sm">
                <Breadcrumb caminhoAtual={caminhoAtual} irParaInicio={irParaInicio} />
                <NavigationButton caminhoAtual={caminhoAtual} voltar={voltar} />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-b-xl shadow-sm min-h-[400px]">
                {arquivos.length === 0 ? (
                    <EmptyFolder />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {arquivos.map((arquivo) => (
                            <FileCard key={arquivo.id} arquivo={arquivo} onOpen={abrirPasta} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}