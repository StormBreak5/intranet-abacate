import { Arquivo, Sistema, Noticia, Aniversariante, DocumentoUtil, Colaborador } from './index';

export const mockArquivos: Record<string, Arquivo[]> = {
    root: [
        { id: 1, nome: "Recursos Humanos", tipo: "folder", data: "10/01/2026" },
        { id: 2, nome: "Marketing & Vendas", tipo: "folder", data: "12/01/2026" },
        { id: 3, nome: "TI & Suporte", tipo: "folder", data: "15/01/2026" },
        { id: 4, nome: "Política de Privacidade.pdf", tipo: "pdf", tamanho: "2.4 MB", data: "01/01/2026" },
    ],
    "Recursos Humanos": [
        { id: 5, nome: "Formulários", tipo: "folder", data: "10/01/2026" },
        { id: 6, nome: "Manual do Colaborador.pdf", tipo: "pdf", tamanho: "5.1 MB", data: "20/01/2026" },
        { id: 7, nome: "Calendário de Feriados 2026.xlsx", tipo: "excel", tamanho: "12 KB", data: "02/01/2026" },
    ],
    "Formulários": [
        { id: 8, nome: "Reembolso de KM.docx", tipo: "word", tamanho: "45 KB", data: "10/02/2026" },
        { id: 9, nome: "Solicitação de Férias.pdf", tipo: "pdf", tamanho: "1.2 MB", data: "11/02/2026" },
    ]
};

export const mockSistemas: Sistema[] = [
    { nome: "ERP Totvs", icone: "📊", url: "#" },
    { nome: "Webmail", icone: "📧", url: "#" },
    { nome: "Portal RH", icone: "👥", url: "#" },
    { nome: "Chamados TI", icone: "🔧", url: "#" },
];

export const mockNoticias: Noticia[] = [
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

export const mockAniversariantes: Aniversariante[] = [
    {
        id: 1,
        nome: "João da Silva",
        iniciais: "JD",
        dia: 12,
        setor: "TI",
        corFundo: "bg-blue-100",
        corTexto: "text-blue-600"
    },
    {
        id: 2,
        nome: "Maria Souza",
        iniciais: "MS",
        dia: 15,
        setor: "RH",
        corFundo: "bg-pink-100",
        corTexto: "text-pink-600"
    },
];

export const mockDocumentosUteis: DocumentoUtil[] = [
    { id: 1, nome: "Manual do Colaborador", icone: "📄", url: "#" },
    { id: 2, nome: "Plano de Saúde (PDF)", icone: "🏥", url: "#" },
    { id: 3, nome: "Cardápio Mensal", icone: "🍽️", url: "#" },
];

export const mockColaboradores: Colaborador[] = [
    { id: 1, nome: "João da Silva", setor: "TI", ramal: "2020", email: "joao@sotrigo.com.br" },
    { id: 2, nome: "Maria Souza", setor: "RH", ramal: "2035", email: "maria@sotrigo.com.br" },
    { id: 3, nome: "Carlos Vendas", setor: "Comercial", ramal: "2040", email: "carlos@sotrigo.com.br" },
    { id: 4, nome: "Ana Financeiro", setor: "Financeiro", ramal: "2050", email: "ana@sotrigo.com.br" },
];
