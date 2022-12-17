export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  refreshTimeExpiration: number;
}
export interface LoginDTO {
  username: string;
  password: string;
}
