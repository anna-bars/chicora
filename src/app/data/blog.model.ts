export interface Blog {
  id: number;
  title: string;
  fullTitle: string;
  date: string;
  badge: string;
  category: string;
  imageUrl: string;
  nailName: string;
  nailDescription: string;
  content: string;        // HTML string
  cardImage?: string;     // grid-ում երևացող նկար (optional, default = imageUrl)
}