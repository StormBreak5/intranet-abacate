export interface Colaborador {
    id: number;
    nome: string;
    ramal: string;
    setor: string;
    email: string;
}

export type TipoArquivo = 'folder' | 'pdf' | 'excel' | 'word';

export interface Arquivo {
    id: number;
    nome: string;
    tipo: TipoArquivo;
    tamanho?: string;
    data: string;
}

export interface Sistema {
    nome: string;
    icone: string;
    url: string;
}

export interface Noticia {
    id: number;
    titulo: string;
    resumo: string;
    conteudo: string;
    data: string;
    tag: string;
    corTag: string;
    imagem?: string; // Base64-encoded image or URL
}

export interface Aniversariante {
    id: number;
    nome: string;
    iniciais: string;
    dia: number;
    setor: string;
    corFundo: string;
    corTexto: string;
}

export interface MenuItem {
    name: string;
    icon: any; // LucideIcon type
    path: string;
}

export interface DocumentoUtil {
    id: number;
    nome: string;
    icone: string;
    url: string;
}
