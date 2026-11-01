export interface Question {
  id: string;
  category: 'fonetica' | 'formale_informale' | 'articoli' | 'verbi' | 'plurali' | 'numeri' | 'vocabolario' | 'vize_simulazione';
  categoryLabel: string;
  prompt: string;
  italianContext?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  // 1. Fonetica & Telaffuz
  {
    id: 'f1',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: '"Chianti" kelimesinin doğru İtalyanca telaffuzu nedir?',
    italianContext: 'Vorrei un bicchiere di vino Chianti, per favore.',
    options: ['Çiyanti', 'Kyanti', 'Şiyanti', 'Kiyanti'],
    correctAnswer: 'Kyanti',
    explanation: 'İtalyancada "H" (acca) dilsizdir, C ve G harflerinin önüne gelerek onları sertleştirir (C+I = Çi iken CH+I = Ki/Kya olur).'
  },
  {
    id: 'f2',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: '"Lasagne" kelimesindeki "GN" harf bileşimi nasıl seslendirilir?',
    italianContext: 'Le lasagne della nonna sono buonissime.',
    options: ['G-N olarak harf harf', 'Türkçedeki "NY" sesi gibi (Lazanya)', 'Sert "G" sesi gibi', 'Dilsiz okunmaz'],
    correctAnswer: 'Türkçedeki "NY" sesi gibi (Lazanya)',
    explanation: 'İtalyancada "GN" yan yana geldiğinde Türkçedeki "ny" sesini verir (Bagno ➔ Banyo, Lasagne ➔ Lazanya, Spagna ➔ Spanya).'
  },
  {
    id: 'f3',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: '"Famiglia" ve "Figlio" kelimelerindeki "GLI" harfleri nasıl okunur?',
    italianContext: 'La mia famiglia abita a Roma.',
    options: ['G-L-I olarak harf harf', 'Türkçedeki "LY" sesi gibi (Familya / Filyo)', 'G harfi sert okunur', 'Sadece "L" gibi'],
    correctAnswer: 'Türkçedeki "LY" sesi gibi (Familya / Filyo)',
    explanation: 'İtalyancada "GLI" bileşiminde G okunmaz; Türkçedeki yumuşak "ly" sesi çıkarılır.'
  },

  // 2. Formale vs Informale
  {
    id: 'fi1',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Üniversite hocanıza "Adınız nedir?" diye resmi (formel) dille nasıl sorarsınız?',
    italianContext: 'Buongiorno professoressa Smith, Lei come _______ ?',
    options: ['come ti chiami?', 'come si chiama?', 'come stai?', 'come si scrive?'],
    correctAnswer: 'come si chiama?',
    explanation: 'Resmi nezaket dilinde (Lei) 3. tekil şahıs kullanılır: "Lei come si chiama?". Arkadaşa ise "Tu come ti chiami?" denir.'
  },
  {
    id: 'fi2',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Resmi bir ortamda birine "Affedersiniz / Kusura bakmayın" derken hangisi kullanılır?',
    italianContext: '_______, professore, può ripetere per favore?',
    options: ['Scusa', 'Scusi', 'Ciao', 'Prego'],
    correctAnswer: 'Scusi',
    explanation: 'İnformel (arkadaşa) "Scusa!", formel (hocaya/resmiye) ise "Scusi!" denir.'
  },
  {
    id: 'fi3',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: '«Di dove è, Signora Rossi?» sorusu hangi hitap türüdür ve kime sorulmuştur?',
    italianContext: 'Di dove è, Signora Rossi?',
    options: [
      'İnformel — Arkadaşa sorulmuştur',
      'Formel (Lei) — Saygıdeğer bir hanımefendiye resmi dille sorulmuştur',
      'Çoğul — Bir gruba sorulmuştur',
      'Geçmiş zaman sorusudur'
    ],
    correctAnswer: 'Formel (Lei) — Saygıdeğer bir hanımefendiye resmi dille sorulmuştur',
    explanation: '3. tekil şahıs "è" kullanıldığı ve unvan (Signora Rossi) yer aldığı için bu soru formeldir (Nerelisiniz?). Arkadaşa "Di dove sei?" denir.'
  },

  // 3. Artikeller (Belirli & Belirsiz)
  {
    id: 'art1',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '"zaino" (sırt çantası) kelimesinin belirli ve belirsiz artikelleri sırasıyla hangisidir?',
    italianContext: 'Ho comprato _______ zaino nuovo. _______ zaino è nero.',
    options: ['il / un', 'lo / uno', 'l\' / un', 'lo / un'],
    correctAnswer: 'lo / uno',
    explanation: 'Z ile veya s+ünsüz ile başlayan eril isimler belirlide "lo" (lo zaino), belirsizde "uno" (uno zaino) alır.'
  },
  {
    id: 'art2',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '"amico" (erkek arkadaş) ve "amica" (kız arkadaş) için doğru belirsiz artikel kullanımı hangisidir?',
    italianContext: 'Ho _______ amico a Milano e _______ amica a Firenze.',
    options: ['un\' amico / un amica', 'un amico / un\'amica', 'uno amico / una amica', 'un amico / una amica'],
    correctAnswer: 'un amico / un\'amica',
    explanation: 'Sınavın en büyük tuzağı! Sesliyle başlayan eril isimler kesme işareti ALMAZ (un amico). Dişil isimler ise kesme işareti ALIR (un\'amica).'
  },
  {
    id: 'art3',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '"lo studente" kelimesinin çoğulu (belirli artikeliyle beraber) hangisidir?',
    italianContext: 'In classe ci sono _______ bravi.',
    options: ['i studenti', 'gli studenti', 'le studenti', 'li studenti'],
    correctAnswer: 'gli studenti',
    explanation: 'Tekilde "lo" veya "l\'" alan eril isimlerin çoğul artikeli her zaman "gli" olur: lo studente ➔ gli studenti.'
  },
  {
    id: 'art4',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '"la penna" kelimesinin belirsiz artikeli ve çoğul belirli hali nedir?',
    italianContext: 'Prendo _______ penna. Sul tavolo ci sono _______ penne.',
    options: ['una penna / le penne', 'un penna / i penne', 'un\'penna / gli penne', 'una penna / la penne'],
    correctAnswer: 'una penna / le penne',
    explanation: 'Dişil tekil belirsiz "una", dişil çoğul belirli ise "le"dir: la penna ➔ una penna ➔ le penne.'
  },

  // 4. Fiiller (Essere, Avere, Stare, -ARE)
  {
    id: 'v1',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: 'İtalyancada "Çok açız" demek için hangi fiil ve çekim kullanılır?',
    italianContext: 'Sono le due del pomeriggio e noi _______ molta fame.',
    options: ['siamo', 'abbiamo', 'stiamo', 'avete'],
    correctAnswer: 'abbiamo',
    explanation: 'Açlık, susuzluk, uyku, korku ve yaş İtalyancada "AVERE" (sahip olmak) ile söylenir: "Noi abbiamo molta fame".'
  },
  {
    id: 'v2',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«I ragazzi _______ (abitare) a Firenze.» cümlesinde boşluğa hangi çekim gelmelidir?',
    italianContext: 'I ragazzi _______ a Firenze da due anni.',
    options: ['abita', 'abitano', 'abitiamo', 'abitate'],
    correctAnswer: 'abitano',
    explanation: '-ARE grubu fiillerde 3. çoğul şahıs (loro / i ragazzi) eki her zaman "-ano"dur: abitare ➔ abitano (ascoltano, parlano).'
  },
  {
    id: 'v3',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Tu che cosa _______ (studiare)?» sorusunda fiil nasıl çekimlenir?',
    italianContext: 'Tu che cosa _______ all\'università?',
    options: ['studiari', 'studio', 'studi', 'studia'],
    correctAnswer: 'studi',
    explanation: 'Kök "studi-" olduğu için "tu" eki olan "-i" geldiğinde tek "i" ile "studi" yazılır.'
  },
  {
    id: 'v4',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '"Ben 20 yaşındayım" cümlesinin doğru İtalyancası nedir?',
    italianContext: 'Quanti anni hai? — _______ .',
    options: ['Sono 20 anni.', 'Sto 20 anni.', 'Ho venti anni.', 'Faccio 20 anni.'],
    correctAnswer: 'Ho venti anni.',
    explanation: 'Yaş söylerken "essere" ASLA kullanılmaz, her zaman "avere" kullanılır: Ho venti anni (veya vent\'anni).'
  },

  // 5. İsim & Sıfat Çoğulları
  {
    id: 'p1',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Queste ragazze sono molto _______ (simpatico).» cümlesinde sıfat nasıl çekimlenir?',
    italianContext: 'Queste ragazze sono molto _______ .',
    options: ['simpatici', 'simpatiche', 'simpatice', 'simpatico'],
    correctAnswer: 'simpatiche',
    explanation: 'Dişil çoğulda -ca ile biten kelimeler sert "K" sesini korumak için "-che" alır: simpatica ➔ simpatiche.'
  },
  {
    id: 'p2',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '"una pizza italiana" tamlamasının çoğul hali hangisidir?',
    italianContext: 'Ordiniamo due _______ .',
    options: ['pizzi italiani', 'pizze italiani', 'pizze italiane', 'pizza italiane'],
    correctAnswer: 'pizze italiane',
    explanation: 'Dişil isim -a ➔ -e olur, sıfat da ona uyarak -a ➔ -e olur: pizza italiana ➔ pizze italiane.'
  },
  {
    id: 'p3',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '"lo studente bravo" tamlamasının çoğul hali nedir?',
    italianContext: 'In questa scuola ci sono _______ .',
    options: ['i studenti bravi', 'gli studenti bravi', 'gli studente bravi', 'i studenti brave'],
    correctAnswer: 'gli studenti bravi',
    explanation: 'lo ➔ gli, studente (-e ile bitenler daima) ➔ studenti (-i), bravo ➔ bravi: "gli studenti bravi".'
  },

  // 6. Sayılar & Edatlar
  {
    id: 'n1',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '21 ve 38 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'Ho 21 anni e mio fratello ne ha 38.',
    options: ['ventiuno / trentaotto', 'ventuno / trentotto', 'ventidue / trentasette', 'ventuno / trentaotto'],
    correctAnswer: 'ventuno / trentotto',
    explanation: '1 (uno) ve 8 (otto) sesliyle başladığı için onluğun son harfi düşer: venti+uno = ventuno, trenta+otto = trentotto.'
  },
  {
    id: 'n2',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Lui abita _______ Roma, _______ Italia.» cümlesindeki boşluklara hangi edatlar gelmelidir?',
    italianContext: 'Dove abita Marco? — Lui abita _______ Roma, _______ Italia.',
    options: ['in / a', 'a / in', 'di / a', 'a / di'],
    correctAnswer: 'a / in',
    explanation: 'Şehirlerin önünde "a" (a Roma, a Firenze), ülkelerin önünde "in" (in Italia, in Turchia) kullanılır!'
  },

  // 7. Sınıf ve Okul Eşyaları Sözlüğü
  {
    id: 'voc1',
    category: 'vocabolario',
    categoryLabel: 'Sözlük & Sınıf Eşyaları',
    prompt: 'Kalemlik, tükenmez kalem ve yazı tahtası İtalyanca sırasıyla nedir?',
    italianContext: 'Nell\'aula ci sono gli oggetti scolastici.',
    options: [
      'l\'astuccio / la penna / la lavagna',
      'lo zaino / la matita / il banco',
      'il quaderno / la gomma / la finestra',
      'l\'orologio / il temperamatite / la scrivania'
    ],
    correctAnswer: 'l\'astuccio / la penna / la lavagna',
    explanation: 'Kalemlik = l\'astuccio (eril), tükenmez kalem = la penna (dişil), yazı tahtası = la lavagna (dişil).'
  },

  // 8. Vize Simülasyonu
  {
    id: 'sim1',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: 'Jane ve Giada arasındaki «Ciao, come ti chiami? Scusa, di dove sei?» diyaloğunun resmi (formel) karşılığı nedir?',
    italianContext: 'Prof.ssa Smith ➔ Prof.ssa Gonzales',
    options: [
      '«Buongiorno, Lei come si chiama? Scusi, di dove è?»',
      '«Ciao, Lei come ti chiami? Scusa, di dove sei?»',
      '«Buongiorno, tu come si chiama? Scusi, di dove è?»',
      '«Arrivederci, come sta? Scusa, dove abiti?»'
    ],
    correctAnswer: '«Buongiorno, Lei come si chiama? Scusi, di dove è?»',
    explanation: 'Ciao ➔ Buongiorno, come ti chiami ➔ Lei come si chiama, scusa ➔ scusi, di dove sei ➔ di dove è şeklinde tam formel dönüşür.'
  }
];
