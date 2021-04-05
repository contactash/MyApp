export type Action = {
  type: string;
  payload?: Payload;
};

export type Payload = {
  data?: string;
  error?: unknown;
};
