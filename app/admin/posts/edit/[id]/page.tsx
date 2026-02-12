'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PostForm } from '@/components/admin/PostForm';
import { Noticia } from '@/types';
import { mockNoticias } from '@/types/mocks';
import { ArrowLeft, FileEdit } from 'lucide-react';
import Link from 'next/link';

export default function EditPostPage() {
    const params = useParams();
    const router = useRouter();
    const [post, setPost] = useState<Noticia | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postId = parseInt(params.id as string);

        // Load from localStorage
        try {
            const stored = localStorage.getItem('intranet_posts');
            let allPosts: Noticia[] = [...mockNoticias];

            if (stored) {
                const createdPosts: Noticia[] = JSON.parse(stored);
                allPosts = [...createdPosts, ...mockNoticias];
            }

            const foundPost = allPosts.find(p => p.id === postId);
            setPost(foundPost || null);
        } catch (error) {
            console.error('Error loading post:', error);
        } finally {
            setLoading(false);
        }
    }, [params.id]);

    const handleUpdate = (updatedPost: Omit<Noticia, 'id'>) => {
        try {
            const stored = localStorage.getItem('intranet_posts');
            let posts: Noticia[] = stored ? JSON.parse(stored) : [];

            // Find and update the post
            const postIndex = posts.findIndex(p => p.id === post?.id);

            if (postIndex !== -1) {
                // Update existing post
                posts[postIndex] = {
                    ...posts[postIndex],
                    ...updatedPost,
                };
            } else {
                // If post is from mockNoticias, we can't edit it
                alert('Não é possível editar postagens de exemplo. Apenas postagens criadas podem ser editadas.');
                return;
            }

            localStorage.setItem('intranet_posts', JSON.stringify(posts));
            alert('Postagem atualizada com sucesso!');
            router.push('/admin/posts');
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Erro ao atualizar postagem. Tente novamente.');
        }
    };

    if (loading) {
        return (
            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Carregando...</div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Postagem não encontrada</h1>
                    <p className="text-gray-600 mb-6">A postagem que você está tentando editar não existe.</p>
                    <Link
                        href="/admin/posts"
                        className="inline-flex items-center gap-2 bg-sotrigo-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                    >
                        <ArrowLeft size={20} />
                        Voltar ao Gerenciamento
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
                href="/admin/posts"
                className="inline-flex items-center gap-2 text-sotrigo-green hover:text-green-700 font-semibold mb-6 transition"
            >
                <ArrowLeft size={20} />
                Voltar ao Gerenciamento
            </Link>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <FileEdit className="text-sotrigo-green" size={32} />
                    Editar Postagem
                </h1>
                <p className="text-gray-600 mt-2">
                    Atualize as informações da postagem abaixo.
                </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <PostForm
                    onSubmit={handleUpdate}
                    initialData={post}
                    submitLabel="Atualizar Postagem"
                />
            </div>
        </div>
    );
}
