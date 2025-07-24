export interface GenerationInput {
  prompt: string;
  negativePrompt?: string;
  steps?: number;
  cfgScale?: number;
  width?: number;
  height?: number;
  sampler_name?: string;
  seed?: number;
  enable_hr?: boolean;
}
