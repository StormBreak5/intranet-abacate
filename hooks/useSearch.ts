import { useState, useMemo } from 'react';

/**
 * Hook customizado para gerenciar busca/filtro de dados
 */
export function useSearch<T>(
    items: T[],
    searchFields: (item: T) => string[]
) {
    const [busca, setBusca] = useState('');

    const filtrados = useMemo(() => {
        if (!busca.trim()) return items;

        return items.filter((item) => {
            const fields = searchFields(item);
            return fields.some(field =>
                field.toLowerCase().includes(busca.toLowerCase())
            );
        });
    }, [items, busca, searchFields]);

    return {
        busca,
        setBusca,
        filtrados,
    };
}
