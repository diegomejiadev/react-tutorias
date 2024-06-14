export interface GIFResponse {
  data: Datum[];
}

export interface Datum {
  id: string;
  url: string;
  images: {
    original: {
      url: string;
    };
  };
}
