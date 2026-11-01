import { QUIZ_QUESTIONS, Question } from '@/data/questions';

export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  scope: string;
  questions: Question[];
}

export const QUIZ_TOPICS: QuizTopic[] = [
  {
    id: 'tutti',
    title: 'Tam Kapsamlı Vize Provası',
    description: 'Tüm üniteleri kapsayan 20 soruluk genel vize tarama testi.',
    scope: 'Unità 0, 1, 2 & Test 1',
    questions: QUIZ_QUESTIONS
  },
  {
    id: 'fonetica',
    title: 'Telaffuz & Fonetik',
    description: 'C/CH, G/GH, GN, GLI okunuşları ve dilsiz H harfi kuralları.',
    scope: 'Unità 0 (In alto s. 13-17)',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'fonetica')
  },
  {
    id: 'formale_informale',
    title: 'Formel (Lei) vs İnformel (tu)',
    description: 'Hocaya hitap, nezaket kalıpları, scusa/scusi, soru sorma.',
    scope: 'Unità 1 & Test 1',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'formale_informale')
  },
  {
    id: 'articoli',
    title: 'Belirli & Belirsiz Artikeller',
    description: 'il, lo, la, l\', i, gli, le ve un, uno, una, un\' kuralları.',
    scope: 'Unità 1 & 2',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'articoli')
  },
  {
    id: 'verbi',
    title: 'Fiil Çekimleri & Kalıplar',
    description: 'Essere, Avere (açlık/yaş), Stare, düzenli -ARE grubu.',
    scope: 'Unità 1 & 2',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'verbi')
  },
  {
    id: 'plurali',
    title: 'İsim & Sıfat Çoğulları',
    description: '-o/-a/-e kuralları, dişil -che sertleşmesi, tamlama uyumu.',
    scope: 'Unità 1',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'plurali')
  },
  {
    id: 'numeri_edatlar',
    title: 'Sayılar & Edatlar',
    description: '0-100 arası sayılar, ventuno/trentotto ve a/in/di edatları.',
    scope: 'Unità 1 & 2',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'numeri')
  },
  {
    id: 'vocabolario',
    title: 'Sınıf Eşyaları & Diyaloglar',
    description: 'Okul eşyaları, kalemlik, sırt çantası ve sınıf dili.',
    scope: 'In alto s. 33-34',
    questions: QUIZ_QUESTIONS.filter(q => q.category === 'vocabolario' || q.category === 'vize_simulazione')
  }
];
