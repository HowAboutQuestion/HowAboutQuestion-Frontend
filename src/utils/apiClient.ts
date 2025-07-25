/**
 * @file apiClient.ts
 * @summary API 요청의 기본 설정과 인터셉터를 설정합니다.
 * @author cod0216
 * @create 2025-07-26
 * @note
 * - 2025.07.26: 최초 생성 (cod0216)
 */
import axios from 'axios';

/**
 * API 요청의 기본 URL
 */
const BASE_URL = import.meta.env.VITE_SERVER_URL;
/**
 * 요청 타임아웃
 */
const TIME_OUT = 3000;

/**
 * 공통 Axios 인스턴스
 */
export const apiClient = axios.create ({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    timeout: TIME_OUT,
});

/**
 * 요청 인터셉터
 */
apiClient.interceptors.request.use(
   (config) => {

        return config;
   },
   (error) => {
    return Promise.reject(error);
   }
);

/**
 * 응답 인터셉터
 */
apiClient.interceptors.response.use(
   (response) => {

        return response;
   },
   (error) => {
    return Promise.reject(error);
   }
);

export default apiClient;