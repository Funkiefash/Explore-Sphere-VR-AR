
export interface Environment {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  panoramaUrl: string;
  category: 'historical' | 'scientific' | 'cultural';
  infoPoints: InfoPoint[];
}

export interface InfoPoint {
  id: string;
  title: string;
  position: { x: number; y: number; z: number };
  query: string;
}

export interface WolframResult {
  success: boolean;
  data?: {
    plaintext?: string;
    image?: string;
  };
  error?: string;
}
