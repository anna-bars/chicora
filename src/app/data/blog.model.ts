export interface NailItem {
  title: string;
  images: string[];      // ← մեկ կամ մի քանի նկար
  description: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  fullTitle: string;
  date: string;
  badge: string;
  category: string;
  imageUrl: string;
  cardImage?: string;
  nailName: string;
  nailDescription: string;
  nailItems?: NailItem[];   // ← structured items (id:1 տիպի բլոգների համար)
  content?: string;          // ← plain HTML (մյուս բլոգների համար)
  finalThoughts?: string;    // ← վերջի հատված
}