import { Folder } from 'lucide-react';

export function EmptyFolder() {
    return (
        <div className="text-center py-20 text-gray-400">
            <Folder size={48} className="mx-auto mb-4 opacity-20" />
            <p>Esta pasta está vazia.</p>
        </div>
    );
}
