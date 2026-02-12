'use client';

import { Noticia } from '@/types';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NewsCarouselProps {
    noticias: Noticia[];
}

export function NewsCarousel({ noticias }: NewsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Get latest 5 posts
    const latestNews = noticias.slice(0, 5);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying || latestNews.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % latestNews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, latestNews.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % latestNews.length);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + latestNews.length) % latestNews.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    if (latestNews.length === 0) {
        return null;
    }

    const currentNews = latestNews[currentIndex];

    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🔥 Destaques
            </h2>

            <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                {/* Main Carousel Content */}
                <Link href={`/posts/${currentNews.id}`} className="block">
                    <div className="relative h-64 md:h-80 lg:h-96">
                        {/* Background Image or Gradient */}
                        {currentNews.imagem ? (
                            <div className="absolute inset-0">
                                <img
                                    src={currentNews.imagem}
                                    alt={currentNews.titulo}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-sotrigo-green via-green-600 to-green-700" />
                        )}

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`${currentNews.corTag} text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide`}>
                                    {currentNews.tag}
                                </span>
                                <span className="text-white/90 text-sm">{currentNews.data}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 line-clamp-2">
                                {currentNews.titulo}
                            </h3>
                            <p className="text-white/90 text-sm md:text-base line-clamp-2 max-w-3xl">
                                {currentNews.resumo}
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Navigation Buttons */}
                {latestNews.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
                            aria-label="Notícia anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
                            aria-label="Próxima notícia"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Indicators */}
                {latestNews.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {latestNews.map((_, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all overflow-hidden relative ${isActive
                                        ? 'w-8 bg-white/30'
                                        : 'w-2 bg-white/50 hover:bg-white/75'
                                        }`}
                                    aria-label={`Ir para notícia ${index + 1}`}
                                >
                                    {isActive && (
                                        <div
                                            className={`absolute top-0 left-0 h-full bg-white ${isAutoPlaying ? 'animate-progress' : 'w-full'}`}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
