import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { QuickAccessCard } from "@/components/dashboard/QuickAccessCard";
import { NewsCard } from "@/components/dashboard/NewsCard";
import { BirthdayList } from "@/components/dashboard/BirthdayList";
import { DocumentsList } from "@/components/dashboard/DocumentsList";
import { mockSistemas, mockNoticias, mockAniversariantes, mockDocumentosUteis } from "@/types/mocks";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <WelcomeBanner />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Acesso Rápido */}
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

          {/* Últimas Notícias */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📰 Últimas Notícias
            </h2>
            <div className="grid gap-4">
              {mockNoticias.map((noticia) => (
                <NewsCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <BirthdayList aniversariantes={mockAniversariantes} />
          <DocumentsList documentos={mockDocumentosUteis} />
        </aside>
      </div>
    </div>
  );
}