'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostForm } from '@/components/admin/PostForm';
import { usePosts } from '@/hooks/usePosts';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function NewPostPage() {
    const router = useRouter();
    const { createPost } = usePosts();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (postData: any) => {
        createPost(postData);
        setShowSuccess(true);

        // Redirect to posts list after 2 seconds
        setTimeout(() => {
            router.push('/admin/posts');
        }, 2000);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href="/admin/posts"
                    className="inline-flex items-center gap-2 text-sotrigo-green hover:text-green-700 font-semibold mb-4 transition"
                >
                    <ArrowLeft size={20} />
                    Voltar para Posts
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Nova Postagem</h1>
                <p className="text-gray-600 mt-2">Crie uma nova postagem para aparecer no dashboard da intranet.</p>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                        <p className="text-green-800 font-semibold">Postagem criada com sucesso!</p>
                        <p className="text-green-700 text-sm">Redirecionando...</p>
                    </div>
                </div>
            )}

            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
                <PostForm onSubmit={handleSubmit} submitLabel="Criar Postagem" />
            </div>
        </div>
    );
}
