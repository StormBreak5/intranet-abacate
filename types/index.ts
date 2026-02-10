// Tipos e Interfaces da Aplicação

// Colaborador/Ramal
export interface Colaborador {
    id: number;
    nome: string;
    ramal: string;
    setor: string;
    email: string;
}

// Arquivo/Documento
export type TipoArquivo = 'folder' | 'pdf' | 'excel' | 'word';

export interface Arquivo {
    id: number;
    nome: string;
    tipo: TipoArquivo;
    tamanho?: string;
    data: string;
}

// Sistema de Acesso Rápido
export interface Sistema {
    nome: string;
    icone: string;
    url: string;
}

// Notícia
export interface Noticia {
    id: number;
    titulo: string;
    resumo: string;
    data: string;
    tag: string;
    corTag: string;
}

// Aniversariante
export interface Aniversariante {
    id: number;
    nome: string;
    iniciais: string;
    dia: number;
    setor: string;
    corFundo: string;
    corTexto: string;
}

// Item de Menu da Sidebar
export interface MenuItem {
    name: string;
    icon: any; // LucideIcon type
    path: string;
}

// Documento Útil
export interface DocumentoUtil {
    id: number;
    nome: string;
    icone: string;
    url: string;
}
