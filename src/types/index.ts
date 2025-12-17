interface AssistantResponseInterface {
  id: string;
  choices: AssistantChoiceInterface[];
  created: number;
  model: string;
  system_fingerprint: string;
  object: string;
  usage: AssistantUsageInterface;
  time_info: AssistantTimeInfoInterface;
}

interface AssistantTimeInfoInterface {
  queue_time: number;
  prompt_time: number;
  completion_time: number;
  total_time: number;
  created: number;
}

interface AssistantUsageInterface {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  prompt_tokens_details: {
    cached_tokens: number;
  };
  completion_tokens_details: {
    accepted_prediction_tokens: number;
    rejected_prediction_tokens: number;
  };
}

interface AssistantChoiceInterface {
  finish_reason: string;
  index: number;
  message: MessageInterface;
}

interface ChatStoreInterface {
  [id: string]: {
    name: string;
    messages: MessageInterface[];
  };
}

interface MessageInterface {
  id?: string;
  content: string;
  reasoning?: string;
  role: MessageRoleType;
}

interface ChatRouteParams {
  id: string;
}

enum MessageRoleType {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export type { AssistantResponseInterface, ChatStoreInterface, MessageInterface, ChatRouteParams };
export { MessageRoleType };
