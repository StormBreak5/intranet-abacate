'use client';

import { useState, FormEvent } from 'react';
import { Noticia } from '@/types';
import RichTextEditor from './RichTextEditor';

interface PostFormProps {
    onSubmit: (post: Omit<Noticia, 'id'>) => void;
    initialData?: Noticia;
    submitLabel?: string;
}

const TAG_OPTIONS = [
    { label: 'Eventos', color: 'bg-sotrigo-orange' },
    { label: 'Segurança', color: 'bg-sotrigo-green' },
    { label: 'RH', color: 'bg-blue-500' },
    { label: 'TI', color: 'bg-purple-500' },
    { label: 'Comunicado', color: 'bg-red-500' },
    { label: 'Geral', color: 'bg-gray-500' },
];

export function PostForm({ onSubmit, initialData, submitLabel = 'Criar Postagem' }: PostFormProps) {
    const [titulo, setTitulo] = useState(initialData?.titulo || '');
    const [resumo, setResumo] = useState(initialData?.resumo || '');
    const [conteudo, setConteudo] = useState(initialData?.conteudo || '');
    const [tag, setTag] = useState(initialData?.tag || 'Geral');
    const [corTag, setCorTag] = useState(initialData?.corTag || 'bg-gray-500');
    const [imagem, setImagem] = useState(initialData?.imagem || '');
    const [imagePreview, setImagePreview] = useState(initialData?.imagem || '');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setErrors({ ...errors, imagem: 'Por favor, selecione um arquivo de imagem válido' });
            return;
        }

        // Validate file size (2MB limit)
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes
        if (file.size > maxSize) {
            setErrors({ ...errors, imagem: 'A imagem deve ter no máximo 2MB' });
            return;
        }

        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;
            setImagem(base64String);
            setImagePreview(base64String);
            // Clear image error if it exists
            const newErrors = { ...errors };
            delete newErrors.imagem;
            setErrors(newErrors);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setImagem('');
        setImagePreview('');
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!titulo.trim()) {
            newErrors.titulo = 'O título é obrigatório';
        } else if (titulo.length < 5) {
            newErrors.titulo = 'O título deve ter pelo menos 5 caracteres';
        }

        if (!resumo.trim()) {
            newErrors.resumo = 'O resumo é obrigatório';
        } else if (resumo.length < 10) {
            newErrors.resumo = 'O resumo deve ter pelo menos 10 caracteres';
        }

        if (!conteudo.trim()) {
            newErrors.conteudo = 'O conteúdo completo é obrigatório';
        }
        // Removed length check for content because HTML tags make it hard to count strictly

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        try {
            onSubmit({
                titulo,
                resumo,
                conteudo,
                tag,
                corTag,
                data: initialData?.data || new Date().toLocaleDateString('pt-BR'),
                imagem: imagem || undefined,
            });

            // Reset form if not editing
            if (!initialData) {
                setTitulo('');
                setResumo('');
                setConteudo('');
                setTag('Geral');
                setCorTag('bg-gray-500');
                setImagem('');
                setImagePreview('');
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div>
                <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Título *
                </label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sotrigo-green focus:border-transparent transition ${errors.titulo ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="Ex: Nova política de home office"
                />
                {errors.titulo && (
                    <p className="mt-1 text-sm text-red-600">{errors.titulo}</p>
                )}
            </div>

            {/* Resumo */}
            <div>
                <label htmlFor="resumo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Resumo *
                </label>
                <textarea
                    id="resumo"
                    value={resumo}
                    onChange={(e) => setResumo(e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sotrigo-green focus:border-transparent transition resize-none ${errors.resumo ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="Escreva um breve resumo da postagem..."
                />
                {errors.resumo && (
                    <p className="mt-1 text-sm text-red-600">{errors.resumo}</p>
                )}
            </div>

            {/* Conteúdo Completo */}
            <div>
                <label htmlFor="conteudo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Conteúdo Completo *
                </label>
                <div className={errors.conteudo ? 'border border-red-500 rounded-lg' : ''}>
                    <RichTextEditor
                        value={conteudo}
                        onChange={setConteudo}
                        placeholder="Escreva o conteúdo completo da postagem..."
                    />
                </div>
                {errors.conteudo && (
                    <p className="mt-1 text-sm text-red-600">{errors.conteudo}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                    Use as ferramentas de formatação acima para estilizar seu texto.
                </p>
            </div>

            {/* Imagem */}
            <div>
                <label htmlFor="imagem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Imagem da Postagem
                </label>
                <input
                    type="file"
                    id="imagem"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sotrigo-green focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sotrigo-green file:text-white hover:file:bg-green-700"
                />
                {errors.imagem && (
                    <p className="mt-1 text-sm text-red-600">{errors.imagem}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                    Formatos aceitos: JPG, PNG, GIF. Tamanho máximo: 2MB.
                </p>

                {/* Image Preview */}
                {imagePreview && (
                    <div className="mt-4 relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-lg border border-gray-300"
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                        >
                            ✕
                        </button>
                    </div>
                )}
            </div>

            {/* Tag e Cor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="tag" className="block text-sm font-semibold text-gray-700 mb-2">
                        Categoria
                    </label>
                    <select
                        id="tag"
                        value={tag}
                        onChange={(e) => {
                            const selectedTag = e.target.value;
                            setTag(selectedTag);
                            const tagOption = TAG_OPTIONS.find(opt => opt.label === selectedTag);
                            if (tagOption) {
                                setCorTag(tagOption.color);
                            }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sotrigo-green focus:border-transparent transition"
                    >
                        {TAG_OPTIONS.map(option => (
                            <option key={option.label} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preview da Tag
                    </label>
                    <div className="flex items-center h-12">
                        <span className={`${corTag} text-white text-xs font-bold px-3 py-2 rounded uppercase tracking-wide`}>
                            {tag}
                        </span>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-sotrigo-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Salvando...' : submitLabel}
                </button>
            </div>
        </form>
    );
}
