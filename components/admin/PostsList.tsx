'use client';

import { Noticia } from '@/types';
import { Trash2, Edit, Eye } from 'lucide-react';

interface PostsListProps {
    posts: Noticia[];
    onDelete: (id: number) => void;
    onEdit?: (id: number) => void;
}

export function PostsList({ posts, onDelete, onEdit }: PostsListProps) {
    if (posts.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <p className="text-gray-500 text-lg">Nenhuma postagem criada ainda.</p>
                <p className="text-gray-400 text-sm mt-2">Crie sua primeira postagem para começar!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`${post.corTag} text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide`}>
                                    {post.tag}
                                </span>
                                <span className="text-xs text-gray-400">{post.data}</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{post.titulo}</h3>
                            <p className="text-gray-600 text-sm">{post.resumo}</p>
                        </div>

                        <div className="flex gap-2">
                            {onEdit && (
                                <button
                                    onClick={() => onEdit(post.id)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                    title="Editar"
                                >
                                    <Edit size={18} />
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    if (confirm('Tem certeza que deseja excluir esta postagem?')) {
                                        onDelete(post.id);
                                    }
                                }}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                title="Excluir"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
