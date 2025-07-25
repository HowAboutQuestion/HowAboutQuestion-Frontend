export interface JwtTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export interface UserInfoReponse {
    id: number;
    createdAt: string;
    userType: string;
    email: string;
    name: string;
    profile: string | null;
}

export interface LoginResponseData {
    userInfoResponse: UserInfoReponse;
    jwtTokenResponse: JwtTokenResponse;
}