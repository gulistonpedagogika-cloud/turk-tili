export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'Boshlang\'ich' | 'O\'rta' | 'Yuqori';
  icon: string;
  content: string;
}

export interface Word {
  turkish: string;
  uzbek: string;
  pronunciation?: string;
  category: string;
}

export const LESSONS: Lesson[] = [
  {
    id: 'alphabet',
    title: 'Turk Alifbosi',
    description: 'Turk tilidagi 29 ta harf va ularning talaffuzi.',
    level: 'Boshlang\'ich',
    icon: 'Type',
    content: `
# Turk Alifbosi (Türk Alfabesi)

Turk alifbosida 29 ta harf mavjud. Ulardan 8 tasi unli, 21 tasi esa undosh harflardir.

## Unli harflar (Ünlüler)
A, E, I, İ, O, Ö, U, Ü

## Maxsus harflar
- **Ç**: "ch" deb o'qiladi (Masalan: Çay - Choy)
- **Ğ**: "yumshoq g". So'z boshida kelmaydi. Oldingi unlini cho'zibroq o'qishga xizmat qiladi.
- **Ş**: "sh" deb o'qiladi (Masalan: Şeker - Shakar)
- **İ**: Katta "I" harfining nuqtali ko'rinishi.
- **I**: Katta "I" harfining nuqtasiz ko'rinishi.
- **Ö**: Nemis tilidagi "ö" kabi talaffuz qilinadi.
- **Ü**: Nemis tilidagi "ü" kabi talaffuz qilinadi.
    `
  },
  {
    id: 'greetings',
    title: 'Salomlashish',
    description: 'Kundalik hayotda eng ko\'p ishlatiladigan iboralar.',
    level: 'Boshlang\'ich',
    icon: 'MessageCircle',
    content: `
# Salomlashish va Tanishuv

Turk tilida muloqotni boshlash uchun eng muhim so'zlar:

- **Merhaba**: Salom
- **Selam**: Salom (norasmiy)
- **Günaydın**: Xayrli tong
- **İyi günler**: Xayrli kun
- **İyi akşamlar**: Xayrli kech
- **İyi geceler**: Xayrli tun
- **Nasılsın?**: Qalaysan?
- **İyiyim, teşekkür ederim**: Yaxshiman, rahmat.
- **Senin adın ne?**: Sening isming nima?
- **Benim adım...**: Mening ismim...
- **Memnun oldum**: Tanishganimdan xursandman.
    `
  },
  {
    id: 'numbers',
    title: 'Sonlar',
    description: '0 dan 100 gacha va undan katta sonlar.',
    level: 'Boshlang\'ich',
    icon: 'Hash',
    content: `
# Sonlar (Sayılar)

0 - Sıfır
1 - Bir
2 - İki
3 - Üç
4 - Dört
5 - Beş
6 - Altı
7 - Yedi
8 - Sekiz
9 - Dokuz
10 - On

20 - Yirmi
30 - Otuz
40 - Kırk
50 - Elli
60 - Altmış
70 - Yetmiş
80 - Seksen
90 - Doksan
100 - Yüz
    `
  }
];

export const WORDS: Word[] = [
  { turkish: 'Su', uzbek: 'Suv', category: 'Kundalik' },
  { turkish: 'Ekmek', uzbek: 'Non', category: 'Kundalik' },
  { turkish: 'Anne', uzbek: 'Ona', category: 'Oila' },
  { turkish: 'Baba', uzbek: 'Ota', category: 'Oila' },
  { turkish: 'Okul', uzbek: 'Maktab', category: 'Ta\'lim' },
  { turkish: 'Kitap', uzbek: 'Kitob', category: 'Ta\'lim' },
  { turkish: 'Kalem', uzbek: 'Qalam', category: 'Ta\'lim' },
  { turkish: 'Araba', uzbek: 'Mashina', category: 'Transport' },
];
