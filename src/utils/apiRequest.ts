/**
 * @file apiRequest.ts
 * @summary Axios 인스턴스를 기반으로 한 API 요청 유틸 입니다.
 * @author cod0216
 * @create 2025-07-26
 * @note
 * - 2025.07.26: 최초 생성 (cod0216)
 */

import apiClient from "@/utils/apiClient"
import type { ResponseDTO }  from "@/utils/apiTypes";
import {AxiosError} from "axios";

/**
 * AxiosError에서 서버 메시지를 추출합니다.
 * @param error AxiosError 객체
 * @returns 에러 메시지
 */
export const extractErrorMessage = (error: AxiosError) => {
    const ResponseDTO = error.response?.data as ResponseDTO<any>
    if(ResponseDTO.message) {
        return (ResponseDTO).message;
    }

    if(error.message) {
        return error.message;
    }
    return "문제가 발생했습니다."
}

/**
 * AxiosError를 ResponseDTO 형식으로 반환합니다.
 * @param error AxiosError 객체
 * @returns 에러 응답 DTO
 */
export const handleApiError = <T>(error: AxiosError<ResponseDTO<T>>): ResponseDTO<T> => {
  if (error.response?.data) {
    return error.response.data;
  }

  return {
    success: false,
    httpCode: error.response?.status ?? 0,
    httpStatus: error.response?.statusText ?? "NETWORK-ERROR",
    serverCode: "NETWORK-001",
    message: extractErrorMessage(error),
    data: null,
  };
};

/**
 * API 요청 유틸 함수 모음
 */
export const request = {

    /**
     * GET 요청
     * @param url 요청 URL
     * @param params 쿼리 파라미터 객체
     */
    get: async <T>(url: string, params?:object): Promise<ResponseDTO<T>> => {
        try{
            const response = await apiClient.get<ResponseDTO<T>>(url,{params});
            return response.data;
        }catch (error) {
            const axiosError = error as AxiosError<ResponseDTO<T>>;
            return handleApiError<T>(axiosError);
        }
    },

    /**
     * POST 요청
     * @param url 요청 URL
     * @param data 전송할 데이터
     */
    post: async <T>(url: string, data?: object): Promise<ResponseDTO<T>> => {
        try{
            const response = await apiClient.post<ResponseDTO<T>>(url, data);
            return response.data;
        }catch (error) {
            const axiosError = error as AxiosError<ResponseDTO<T>>;
            return handleApiError<T>(axiosError);
        }
    },

    /**
     * PUT 요청
     * @param url 요청 URL
     * @param data 전송할 데이터
     */
    put: async <T>(url: string, data?: object): Promise<ResponseDTO<T>> => {
        try{
            const response = await apiClient.put<ResponseDTO<T>>(url, data);
            return response.data;
        }catch (error) {
            const axiosError = error as AxiosError<ResponseDTO<T>>;
            return handleApiError<T>(axiosError);
        }
    },

    /**
     * PATCH 요청
     * @param url 요청 URL
     * @param data 전송할 데이터
     */
    patch: async <T>(url: string, data?: object): Promise<ResponseDTO<T>> => {
        try{
            const response = await apiClient.patch<ResponseDTO<T>>(url, data);
            return response.data;
        }catch (error) {
            const axiosError = error as AxiosError<ResponseDTO<T>>;
            return handleApiError<T>(axiosError);
        }
    },
    /**
     * DELETE 요청
     * @param url 요청 URL
     * @param data 전솔할 데이터
     */
    delete: async <T>(url: string, data?: object): Promise<ResponseDTO<T>> => {
        try{
            const response = await apiClient.delete<ResponseDTO<T>>(url, {data});
            return response.data;
        }catch (error) {
            const axiosError = error as AxiosError<ResponseDTO<T>>;
            return handleApiError<T>(axiosError);
        }
    }
}