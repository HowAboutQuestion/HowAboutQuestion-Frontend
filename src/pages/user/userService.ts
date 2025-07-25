import { request } from "@/utils/apiRequest";
import type { LoginResponseData } from "@/pages/user/types";
import type { ResponseDTO } from "@/utils/apiTypes";

export const login = async (email: string, password: string): Promise<ResponseDTO<LoginResponseData>> => {
  return await request.post<LoginResponseData>("/api/auths/login", { email, password });
};