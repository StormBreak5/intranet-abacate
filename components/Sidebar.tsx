'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Users, FileText, Bell } from 'lucide-react';
import { MenuItem as MenuItemType } from '@/types';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { MenuItem } from './sidebar/MenuItem';
import { SidebarFooter } from './sidebar/SidebarFooter';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems: MenuItemType[] = [
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
                <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <nav className="mt-6 px-2 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <MenuItem
                                key={item.path}
                                item={item}
                                isActive={isActive}
                                isOpen={isOpen}
                            />
                        );
                    })}
                </nav>

                <SidebarFooter isOpen={isOpen} />
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
