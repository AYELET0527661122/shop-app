export interface Product {
  id: number
  name: string
  price: number
  category: string
  description: string
  image: string
  badge?: string
}

export const products: Product[] = [
  { id: 1, name: 'שמלת קיץ אלגנטית', price: 380, category: 'שמלות', description: 'שמלת קיץ קלילה בבד משי טבעי, מתאימה לכל אירוע', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', badge: 'חדש' },
  { id: 2, name: 'תיק עור איטלקי', price: 890, category: 'תיקים', description: 'תיק יד מעור אמיתי, עיצוב מינימליסטי מרשים', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', badge: 'בסט סלר' },
  { id: 3, name: 'נעלי עקב קלאסיות', price: 650, category: 'נעליים', description: 'נעלי עקב בגובה 7 ס"מ, נוחות ואלגנטיות', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop' },
  { id: 4, name: 'צמיד זהב עדין', price: 420, category: 'תכשיטים', description: 'צמיד זהב 14 קראט, עיצוב עדין ומיוחד', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop', badge: 'מבצע' },
  { id: 5, name: 'בלייזר לבן מחויט', price: 720, category: 'עליוניות', description: 'בלייזר לבן מחויט, פרימיום קולקשן 2025', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4d7c?w=400&h=500&fit=crop' },
  { id: 6, name: 'משקפי שמש ויינטג׳', price: 290, category: 'אקססוריז', description: 'משקפי שמש בסגנון ויינטג׳ איטלקי, UV400', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop', badge: 'חדש' },
]

export const categories = ['הכל', 'שמלות', 'תיקים', 'נעליים', 'תכשיטים', 'עליוניות', 'אקססוריז']
