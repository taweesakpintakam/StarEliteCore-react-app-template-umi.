import '@/extensions';

import { useCallback, useState } from 'react';

import { LoginAPI } from '../services';

export default function useLoginModel() {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useCallback(async (payload: { username: string; password: string }): Promise<CallBackResult> => {
    try {
      setLoading(true);
      let response: ApiResponse = await LoginAPI(payload).finally(() => setLoading(false));
      return { state: !!response && response.code === 200, msg: response.msg, data: response?.data };
    } catch (error) {
      throw error;
    }
  }, []);

  return { loading, signIn };
}
