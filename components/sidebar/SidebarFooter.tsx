import { LogOut } from 'lucide-react';

interface SidebarFooterProps {
    isOpen: boolean;
}

export function SidebarFooter({ isOpen }: SidebarFooterProps) {
    return (
        <div className="absolute bottom-4 left-0 w-full px-2 space-y-2">
            <button className="w-full flex items-center gap-4 p-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                <LogOut size={24} />
                <span className={`whitespace-nowrap font-medium transition-all ${!isOpen && 'hidden'}`}>
                    Sair
                </span>
            </button>
        </div>
    );
}
