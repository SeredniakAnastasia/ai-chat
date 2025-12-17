import { axiosInstance } from '@/api/axiosInstance';
import type { AssistantResponseInterface, MessageInterface } from '@/types';
import type { AxiosResponse } from 'axios';

export const sendMessage = (
  data: MessageInterface[],
  model: string = 'llama-3.3-70b'
): Promise<AxiosResponse<AssistantResponseInterface>> => {
  return axiosInstance.post<AssistantResponseInterface>('v1/chat/completions', {
    messages: toRaw(data),
    model,
  });
};
