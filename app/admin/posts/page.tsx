'use client';

import { usePosts } from '@/hooks/usePosts';
import { PostsList } from '@/components/admin/PostsList';
import { Plus, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PostsManagementPage() {
    const router = useRouter();
    const { posts, loading, deletePost } = usePosts();

    if (loading) {
        return (
            <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Carregando...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <FileText className="text-sotrigo-green" size={32} />
                        Gerenciar Postagens
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Gerencie todas as postagens que aparecem no dashboard da intranet.
                    </p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="bg-sotrigo-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                >
                    <Plus size={20} />
                    Nova Postagem
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="text-3xl font-bold text-sotrigo-green">{posts.length}</div>
                    <div className="text-gray-600 text-sm mt-1">Total de Postagens</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="text-3xl font-bold text-blue-600">
                        {posts.filter(p => p.tag === 'Eventos').length}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">Eventos</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="text-3xl font-bold text-purple-600">
                        {posts.filter(p => p.tag === 'RH').length}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">RH</div>
                </div>
            </div>

            {/* Posts List */}
            <PostsList
                posts={posts}
                onDelete={deletePost}
                onEdit={(id) => router.push(`/admin/posts/edit/${id}`)}
            />
        </div>
    );
}
