/**
 * @file apiTypes.ts
 * @summary 서버에서 공통적으로 사용하는 apiRequest 관련 타입입니다.
 * @author cod0216
 * @create 2025.07.26
 * @note
 * - 2025.07.26: 최초 생성 (cod0216)
 */


/**
 * 서버 응답 기본 포맷
 * @template T 응답 데이터 타입
 */
export interface ResponseDTO<T> {
    success: boolean;
    httpCode: number;
    httpStatus: string;
    serverCode : string;
    message : string;
    data?: T|null;
}
