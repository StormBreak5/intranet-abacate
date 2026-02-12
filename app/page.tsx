'use client';

import { useEffect, useState } from 'react';
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { QuickAccessCard } from "@/components/dashboard/QuickAccessCard";
import { NewsCard } from "@/components/dashboard/NewsCard";
import { NewsCarousel } from "@/components/dashboard/NewsCarousel";
import { BirthdayList } from "@/components/dashboard/BirthdayList";
import { DocumentsList } from "@/components/dashboard/DocumentsList";
import { mockSistemas, mockNoticias, mockAniversariantes, mockDocumentosUteis } from "@/types/mocks";
import { Noticia } from "@/types";

export default function Home() {
  const [allNoticias, setAllNoticias] = useState<Noticia[]>(mockNoticias);

  useEffect(() => {
    // Load posts from localStorage
    try {
      const stored = localStorage.getItem('intranet_posts');
      if (stored) {
        const createdPosts: Noticia[] = JSON.parse(stored);
        // Combine created posts with mock posts, created posts first
        setAllNoticias([...createdPosts, ...mockNoticias]);
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-8">
      <WelcomeBanner />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* News Carousel */}
          <NewsCarousel noticias={allNoticias} />

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🚀 Acesso Rápido
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockSistemas.map((sistema) => (
                <QuickAccessCard key={sistema.nome} sistema={sistema} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📰 Últimas Notícias
            </h2>
            <div className="grid gap-4">
              {allNoticias.map((noticia) => (
                <NewsCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <BirthdayList aniversariantes={mockAniversariantes} />
          <DocumentsList documentos={mockDocumentosUteis} />
        </aside>
      </div>
    </div>
  );
}