import { DocumentoUtil } from '@/types';

interface DocumentsListProps {
    documentos: DocumentoUtil[];
}

export function DocumentsList({ documentos }: DocumentsListProps) {
    return (
        <div className="bg-sotrigo-green text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold mb-4">📂 Documentos Úteis</h3>
            <ul className="space-y-3 text-sm">
                {documentos.map((documento) => (
                    <li key={documento.id}>
                        <a href={documento.url} className="flex items-center gap-2 hover:text-green-200">
                            {documento.icone} {documento.nome}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
