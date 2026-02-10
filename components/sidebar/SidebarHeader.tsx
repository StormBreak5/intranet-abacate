import Image from 'next/image';
import { Menu, ChevronLeft } from 'lucide-react';

interface SidebarHeaderProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export function SidebarHeader({ isOpen, toggleSidebar }: SidebarHeaderProps) {
    return (
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100 bg-sotrigo-orange">
            <div className={`font-bold text-white text-xl overflow-hidden transition-all ${!isOpen && 'hidden'}`}>
                <Image src="/logo.png" alt="Sotrigo" width={100} height={100} className="object-contain" />
            </div>

            <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg text-white hover:bg-white/20 transition"
            >
                {isOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
            </button>
        </div>
    );
}
