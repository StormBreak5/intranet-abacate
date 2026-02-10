import { useState } from 'react';

/**
 * Hook customizado para gerenciar navegação de arquivos/pastas
 */
export function useFileNavigation() {
    const [caminhoAtual, setCaminhoAtual] = useState<string[]>([]);

    const pastaAtual = caminhoAtual.length === 0 ? 'root' : caminhoAtual[caminhoAtual.length - 1];

    const abrirPasta = (nomePasta: string) => {
        setCaminhoAtual([...caminhoAtual, nomePasta]);
    };

    const voltar = () => {
        setCaminhoAtual(caminhoAtual.slice(0, -1));
    };

    const irParaInicio = () => {
        setCaminhoAtual([]);
    };

    return {
        caminhoAtual,
        pastaAtual,
        abrirPasta,
        voltar,
        irParaInicio,
    };
}
