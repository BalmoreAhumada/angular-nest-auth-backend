export interface JwtPayload {
    id: string;
    //fecha de creacion
    iat?: number;
    //fecha de expiracion
    exp?: number;
}