'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Users, FileText, Bell, Menu, X, FileEdit } from 'lucide-react';
import { MenuItem as MenuItemType } from '@/types';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { MenuItem } from './sidebar/MenuItem';
import { SidebarFooter } from './sidebar/SidebarFooter';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleMenuClick = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const menuItems: MenuItemType[] = [
        { name: 'Dashboard', icon: Home, path: '/' },
        { name: 'Ramais', icon: Users, path: '/ramais' },
        { name: 'Documentos', icon: FileText, path: '/documentos' },
        { name: 'Avisos', icon: Bell, path: '/avisos' },
        { name: 'Gerenciar Posts', icon: FileEdit, path: '/admin/posts' },
    ];

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 bg-sotrigo-orange text-white p-3 rounded-lg shadow-lg hover:bg-orange-600 transition"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`fixed left-0 top-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out
                    ${isMobile
                        ? `${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
                        : `${isOpen ? 'w-64' : 'w-20'}`
                    }
                `}
            >
                <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <nav className="mt-6 px-2 space-y-2" onClick={handleMenuClick}>
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
                    margin-left: ${isMobile ? '0' : (isOpen ? '16rem' : '5rem')};
                    transition: margin-left 300ms ease-in-out;
                }
                
                @media (max-width: 1024px) {
                    main {
                        margin-left: 0 !important;
                        padding-top: 4rem;
                    }
                }
            `}</style>
        </>
    );
}
