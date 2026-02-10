import Link from 'next/link';
import { MenuItem as MenuItemType } from '@/types';

interface MenuItemProps {
    item: MenuItemType;
    isActive: boolean;
    isOpen: boolean;
}

export function MenuItem({ item, isActive, isOpen }: MenuItemProps) {
    return (
        <Link
            href={item.path}
            className={`
                flex items-center gap-4 p-3 rounded-lg transition-all group relative
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
}
