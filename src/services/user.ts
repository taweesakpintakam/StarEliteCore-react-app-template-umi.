import { request } from 'umi';

/**
 * 登录API
 * @param data
 */
export const UserInfoAPI = async (): Promise<ApiResponse> => request('/user/info', { method: 'GET' });
