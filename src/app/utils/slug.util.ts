export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')           // apostrophe-ներ հեռացնել
    .replace(/[^a-z0-9\s-]/g, '')  // հատուկ նիշեր հեռացնել
    .trim()
    .replace(/\s+/g, '-')          // spaces → դեֆիս
    .replace(/-+/g, '-');           // կրկնվող դեֆիսներ → մեկ
}