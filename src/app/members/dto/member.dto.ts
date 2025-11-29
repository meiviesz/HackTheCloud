export enum MemberArea {
    COORDENACAO = 'Coordenação',
    GESTAO = 'Gestão',
    COMUNICACAO = 'Comunicação',
    FINANCEIRO = 'Financeiro',
    LOGISTICA = 'Logística'
}

export enum MemberRole {
    COORDENADOR = 'Coordenador',
    GESTOR = 'Gestor',
    GERENTE = 'Gerente',
    MEMBRO = 'Membro'
}

export interface MemberDto {
    name: string,
    course: string,
    area: MemberArea,
    role: MemberRole,
    photoName: string,
    photoId: string
}

export type GroupedMembers = Map<MemberArea, MemberDto[]>;
