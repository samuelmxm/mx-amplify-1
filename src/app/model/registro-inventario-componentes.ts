export interface RegistroInventarioComponentes {
    _id: string,
    DataRegistro: Date,
    Dependencias: Dependencia[]
}


export interface Dependencia {
    Identificador: boolean,
    Descricao?: string,
    Nome: string,
    ContemVulnerabilidades: boolean,
    Licenca?: string,
    Projetos: string[],
    Versao?: string
}

export interface HTMLDeProjeto {
    html: string,
    offset: number,
    tamanhoTotal: number,
    temMais: boolean
}
