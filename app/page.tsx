import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // MOCKS 
  const sistemas = [
    { nome: "ERP Totvs", icone: "📊", url: "#" },
    { nome: "Webmail", icone: "📧", url: "#" },
    { nome: "Portal RH", icone: "👥", url: "#" },
    { nome: "Chamados TI", icone: "🔧", url: "#" },
  ];

  const noticias = [
    {
      id: 1,
      titulo: "Festa de Fim de Ano Confirmada!",
      resumo: "Prepare-se para o nosso grande evento. Saiba mais sobre data e local.",
      data: "10/02/2026",
      tag: "Eventos",
      corTag: "bg-sotrigo-orange",
    },
    {
      id: 2,
      titulo: "Novo Protocolo de Segurança na Fábrica",
      resumo: "Todos os colaboradores devem atualizar seus EPIs até sexta-feira.",
      data: "09/02/2026",
      tag: "Segurança",
      corTag: "bg-sotrigo-green",
    },
    {
      id: 3,
      titulo: "Cardápio do Refeitório - Semana 07",
      resumo: "Confira as opções especiais desta semana.",
      data: "08/02/2026",
      tag: "RH",
      corTag: "bg-blue-500",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-sotrigo-orange to-orange-500 rounded-2xl p-8 text-white shadow-lg flex items-center justify-between relative overflow-hidden">
        <div className="z-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-2">Olá, Colaborador!</h1>
          <p className="text-orange-100 text-lg mb-6">
            Bem-vindo à nova Intranet Sotrigo. Tudo o que você precisa, em um só lugar.
          </p>
          <button className="bg-white text-sotrigo-orange px-6 py-2 rounded-full font-bold shadow hover:bg-gray-100 transition">
            Ver meus avisos
          </button>
        </div>

        <div className="hidden md:block absolute right-10 -bottom-10 opacity-90">
          <Image src="/sotriguinho-sotrigo-alimentos.png" alt="Mascote Sotrigo" width={250} height={250} className="object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🚀 Acesso Rápido
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sistemas.map((sistema) => (
                <a
                  key={sistema.nome}
                  href={sistema.url}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-sotrigo-green transition group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{sistema.icone}</span>
                  <span className="font-medium text-gray-700">{sistema.nome}</span>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📰 Últimas Notícias
            </h2>
            <div className="grid gap-4">
              {noticias.map((noticia) => (
                <div key={noticia.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col md:flex-row gap-4 items-start">
                  <div className={`text-xs font-bold text-white px-2 py-1 rounded uppercase tracking-wide ${noticia.corTag}`}>
                    {noticia.tag}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{noticia.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-2">{noticia.resumo}</p>
                    <span className="text-xs text-gray-400">Publicado em {noticia.data}</span>
                  </div>
                  <button className="text-sotrigo-green font-semibold text-sm hover:underline self-end md:self-center">
                    Ler mais →
                  </button>
                </div>
              ))}
            </div>
          </section>

        </div>

        <aside className="space-y-8">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">🎉 Aniversariantes do Mês</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JD</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">João da Silva</p>
                  <p className="text-xs text-gray-500">Dia 12 - TI</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">MS</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Maria Souza</p>
                  <p className="text-xs text-gray-500">Dia 15 - RH</p>
                </div>
              </li>
            </ul>
            <button className="w-full mt-4 text-center text-sm text-sotrigo-orange font-medium hover:underline">
              Ver todos
            </button>
          </div>

          <div className="bg-sotrigo-green text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold mb-4">📂 Documentos Úteis</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-green-200">
                  📄 Manual do Colaborador
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-green-200">
                  🏥 Plano de Saúde (PDF)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-green-200">
                  🍽️ Cardápio Mensal
                </a>
              </li>
            </ul>
          </div>

        </aside>
      </div>
    </div>
  );
}