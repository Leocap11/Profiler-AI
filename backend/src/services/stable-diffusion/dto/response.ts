export interface Txt2ImgResponse {
  images: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: Record<string, any>;
  info: string;
}
