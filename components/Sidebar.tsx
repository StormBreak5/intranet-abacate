'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Home,
    Users,
    FileText,
    Bell,
    Menu,
    ChevronLeft,
    LogOut,
    Settings
} from 'lucide-react';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Dashboard', icon: Home, path: '/' },
        { name: 'Ramais', icon: Users, path: '/ramais' },
        { name: 'Documentos', icon: FileText, path: '/documentos' },
        { name: 'Avisos', icon: Bell, path: '/avisos' },
    ];

    return (
        <>
            <aside
                className={`fixed left-0 top-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-20'} 
        `}
            >
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

                <nav className="mt-6 px-2 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`
                            flex items-center gap-4 p-3 rounded-lg transition-all group
                            ${isActive ? 'bg-orange-50 text-sotrigo-orange' : 'text-gray-600 hover:bg-gray-50 hover:text-sotrigo-orange'}
                        `}
                            >
                                <div className="min-w-[24px]">
                                    <item.icon size={24} />
                                </div>

                                <span className={`whitespace-nowrap font-medium transition-all ${!isOpen && 'opacity-0 w-0 overflow-hidden'}`}>
                                    {item.name}
                                </span>

                                {!isOpen && (
                                    <div className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 ml-2">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-4 left-0 w-full px-2 space-y-2">
                    <button className="w-full flex items-center gap-4 p-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                        <LogOut size={24} />
                        <span className={`whitespace-nowrap font-medium transition-all ${!isOpen && 'hidden'}`}>
                            Sair
                        </span>
                    </button>
                </div>
            </aside>

            <style jsx global>{`
        main {
            margin-left: ${isOpen ? '16rem' : '5rem'}; /* 16rem = 64 (256px), 5rem = 20 (80px) */
            transition: margin-left 300ms ease-in-out;
        }
      `}</style>
        </>
    );
}