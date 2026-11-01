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
  // ==========================================
  // 1. Fonetica & Telaffuz (Unità 0) - 12 Soru
  // ==========================================
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
  {
    id: 'f4',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: '"Spaghetti" ve "Ghiaccio" kelimelerindeki "GH" harf bileşimi nasıl telaffuz edilir?',
    italianContext: 'Vorrei un piatto di spaghetti e un bicchiere d\'acqua con ghiaccio, per favore.',
    options: [
      'Sert "G" sesi ile (Spagetti / Gyaçço)',
      'Türkçedeki "C" sesi ile (Spacetti / Cyaçço)',
      '"G" harfi dilsizdir, okunmaz',
      'Boğazdan hırıltılı "H" sesi ile'
    ],
    correctAnswer: 'Sert "G" sesi ile (Spagetti / Gyaçço)',
    explanation: 'İtalyancada "G" harfi E ve I önünde yumuşak ("C" sesi: gelato) okunurken; araya "H" (acca) girdiğinde ("GHE", "GHI") ses sertleşir ve Türkçedeki sert "G" sesine dönüşür (Spaghetti ➔ Spagetti, Ghiaccio ➔ Gyaçço).'
  },
  {
    id: 'f5',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'İtalyan mutfağının ünlü lezzeti «Bruschetta» kelimesinin doğru telaffuzu nedir?',
    italianContext: 'Come antipasto prendiamo due bruschette con pomodoro e basilico.',
    options: [
      'Brusketta',
      'Bruşetta',
      'Brusçetta',
      'Bruketta'
    ],
    correctAnswer: 'Brusketta',
    explanation: 'İtalyancada "SC" harfleri E ve I önünde "Ş" sesi (pesce = peşe, scena = şena) verir. Ancak araya "H" (acca) girdiğinde ("SCHE", "SCHI") ses sertleşerek "SK" okunur: Bruschetta ➔ Brusketta.'
  },
  {
    id: 'f6',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'İtalyancada "H" (acca) harfinin telaffuzu ile ilgili hangisi doğrudur?',
    italianContext: 'Io ho fame e lui ha sonno: andiamo in hotel.',
    options: [
      'Tamamen dilsizdir (muta); kelime başında veya içinde asla seslendirilmez (okunmaz).',
      'Türkçedeki gibi boğazdan "H" sesi olarak okunur.',
      'Sadece kelime başında seslendirilir, kelime ortasında düşer.',
      'İngilizcedeki gibi nefesli "H" sesi olarak çıkarılır.'
    ],
    correctAnswer: 'Tamamen dilsizdir (muta); kelime başında veya içinde asla seslendirilmez (okunmaz).',
    explanation: 'İtalyancada "H" harfi tamamen dilsizdir (lettera muta). "Ho" (o), "hai" (ay), "ha" (a) ve "hotel" (otel) şeklinde okunur; seste hiçbir "h" duyulmaz.'
  },
  {
    id: 'f7',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'İtalyanca bir kelimenin anlamını bilmediğinizde «... ne anlama geliyor / ne demek?» diye sormak için hangi sınıf içi acil durum kalıbı kullanılır?',
    italianContext: 'Scusi professore, non capisco: _______ "albergo"?',
    options: [
      'Cosa vuol dire...?',
      'Come si dice...?',
      'Come si scrive...?',
      'Puoi ripetere...?'
    ],
    correctAnswer: 'Cosa vuol dire...?',
    explanation: 'İtalyancada bilinmeyen bir kelimenin anlamını sormak için "Cosa vuol dire...?" (Ne anlama geliyor?), Türkçeden İtalyancaya çevirisini sormak için "Come si dice ... in italiano?" (Nasıl denir?), yazılışını sormak için "Come si scrive?" kullanılır.'
  },
  {
    id: 'f8',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'Derste hocanıza Türkçe bir sözcüğün İtalyanca karşılığını sormak istediğinizde ("İtalyancada \'kitap\' nasıl denir?") hangi soru kalıbı kullanılır?',
    italianContext: 'Scusi professore, _______ "kitap" in italiano? - Si dice "libro".',
    options: [
      'Come si dice...?',
      'Come si scrive...?',
      'Cosa vuol dire...?',
      'Puoi ripetere...?'
    ],
    correctAnswer: 'Come si dice...?',
    explanation: 'Bir sözcüğün başka bir dilden İtalyancaya karşılığını sormak için "Come si dice ... in italiano?" (İtalyancada nasıl denir?) kalıbı kullanılır.'
  },
  {
    id: 'f9',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'İtalyancada "C" harfi ve "CH" bileşimiyle ilgili olarak «Cena», «Chiave» ve «Calcio» kelimelerinin doğru okunuşu hangi seçenekte verilmiştir?',
    italianContext: 'Stasera andiamo a cena, giochiamo a calcio e poi cerchiamo la chiave.',
    options: [
      'Çena - Kyave - Kalço',
      'Kena - Çyave - Kalço',
      'Çena - Şyave - Kalsiyo',
      'Kena - Kyave - Çalço'
    ],
    correctAnswer: 'Çena - Kyave - Kalço',
    explanation: 'C harfi E ve I önünde "Ç" sesidir (Cena ➔ Çena). Araya H girdiğinde "K" sesine sertleşir (Chiave ➔ Kyave). A, O, U önünde ise sert K sesidir (Calcio ➔ Kalço).'
  },
  {
    id: 'f10',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: '«Gelato» ve «Giro» kelimelerindeki "G" harfi ile «Spaghetti» kelimesindeki "GH" bileşiminin okunuş kuralı hangisinde doğru açıklanmıştır?',
    italianContext: 'Prendiamo un gelato, facciamo un giro e poi mangiamo gli spaghetti.',
    options: [
      '"G" harfi E ve I önünde yumuşak (C sesi: Celato, Ciro); araya H girince sertleşir (G sesi: Spagetti).',
      '"G" harfi her zaman sert okunur (Gelato, Giro); H harfi gelince dilsiz olur.',
      '"G" harfi Fransızcadaki gibi "J" sesi verir; "GH" ise boğazdan hırıltılı okunur.',
      '"G" harfi İtalyancada hiçbir zaman seslendirilmez, dilsiz harftir.'
    ],
    correctAnswer: '"G" harfi E ve I önünde yumuşak (C sesi: Celato, Ciro); araya H girince sertleşir (G sesi: Spagetti).',
    explanation: 'İtalyancada G harfi E ve I önünde yumuşaktır (Celato, Ciro). Araya H girince sertleşir (Spaghetti ➔ Spagetti).'
  },
  {
    id: 'f11',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'İtalyan alfabesinde "B", "C", "H" ve "Z" harflerinin İtalyanca isimleri sırasıyla nedir?',
    italianContext: 'Professore: «Puoi fare lo spelling?» - Studente: «Sì: B, C, H, Z...»',
    options: [
      'bi - ci - acca - zeta',
      'be - ce - ha - zetta',
      'bi - si - eych - zed',
      'ba - ca - acca - zeta'
    ],
    correctAnswer: 'bi - ci - acca - zeta',
    explanation: 'İtalyan alfabesinde harflerin adları: B (bi), C (ci), H (acca), Z (zeta) şeklindedir.'
  },
  {
    id: 'f12',
    category: 'fonetica',
    categoryLabel: 'Fonetica & Telaffuz',
    prompt: 'Sınıfta öğretmen bir soru sorduğunda cevabı bilmiyorsanız «Bilmiyorum» demek için hangi sınıf içi kalıp kullanılır?',
    italianContext: 'Professore: «Marco, sai la risposta?» - Marco: «Scusi professore, _______!»',
    options: [
      'Non lo so',
      'Non ho capito',
      'Puoi ripetere',
      'Come si scrive'
    ],
    correctAnswer: 'Non lo so',
    explanation: 'Cevabı bilmediğimizde "Non lo so" (Bilmiyorum) denir. Anlamadığımızda ise "Non ho capito" denir.'
  },

  // ==========================================
  // 2. Formale vs Informale (Unità 1 & Test 1) - 12 Soru
  // ==========================================
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
    explanation: '3. tekil şahıs "è" kullanıldığı ve unvan (Signora Rossi) yer aldığı için bu soru formeldir (Nerelisiniz?).'
  },
  {
    id: 'fi4',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Resmi bir ortamda (örneğin müdürünüze veya doktorunuza) "Nasılsınız?" diye sorarken boşluğa hangisi gelmelidir?',
    italianContext: 'Buongiorno Dottore, come _______ ? - Bene, grazie, e Lei?',
    options: ['stai', 'sta', 'sto', 'stanno'],
    correctAnswer: 'sta',
    explanation: 'Resmi nezaket dilinde (Lei) 3. tekil şahıs kullanılır: "Come sta?". Samimi hitapta (tu) ise "Come stai?" denir.'
  },
  {
    id: 'fi5',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Resmi bir ortamdan (örneğin profesörünüzün odasından) ayrılırken kullanılan en saygılı/formel veda ifadesi hangisidir?',
    italianContext: 'Grazie mille professore, buona giornata e _______ !',
    options: ['Ciao', 'Arrivederci', 'ArrivederLa', 'A dopo'],
    correctAnswer: 'ArrivederLa',
    explanation: '"ArrivederLa", resmi nezaket dilindeki (Lei) muhataplar için kullanılan en formel vedalaşma şeklidir.'
  },
  {
    id: 'fi6',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'İtalyancada resmi hitapta (nezaket dili), karşınızdaki kişi bir ERKEK dahi olsa hangi özne zamiri kullanılır?',
    italianContext: 'Scusi, _______ è il Signor Bianchi?',
    options: ['Tu', 'Lui', 'Lei', 'Voi'],
    correctAnswer: 'Lei',
    explanation: 'İtalyancada nezaket dili (formale) hem kadınlar hem erkekler için daima 3. tekil şahıs olan "Lei" ile ifade edilir.'
  },
  {
    id: 'fi7',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Yeni tanıştığınız bir sınıf arkadaşınıza (informel) "Nerelisin?" diye sormak için hangisi kullanılır?',
    italianContext: 'Ciao Matteo, piacere! Tu _______ ?',
    options: ['di dove è?', 'di dove sei?', 'come si chiama?', 'di dove siete?'],
    correctAnswer: 'di dove sei?',
    explanation: 'Arkadaşa samimi (tu) hitap ederken "Di dove sei?" sorulur. Resmi nezaket dilinde (Lei) ise "Di dove è?" kullanılır.'
  },
  {
    id: 'fi8',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Resmi bir ortamda (örneğin bir direktör veya profesörle) tanıştırıldığınızda "Tanıştığıma çok memnun oldum" anlamında kullanılan en formel ifade hangisidir?',
    italianContext: '— Le presento il Direttore Rossi. — _______, Direttore!',
    options: ['Molto lieto', 'Ciao', 'A presto', 'Di niente'],
    correctAnswer: 'Molto lieto',
    explanation: 'Resmi tanışmalarda (Lei nezaketinde) "Molto lieto!" (kadınlar için "Molto lieta!") ifadesi tercih edilir.'
  },
  {
    id: 'fi9',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Gündüz saatlerinde bir kütüphaneye veya üniversite sekreterliğine girdiğinizde görevliye resmi bir selam vermek için hangisi kullanılmalıdır?',
    italianContext: '_______, vorrei un\'informazione per favore.',
    options: ['Buongiorno', 'Ciao', 'Buonanotte', 'A dopo'],
    correctAnswer: 'Buongiorno',
    explanation: 'Resmi görevlilere ve hocalara gün içinde "Buongiorno", akşam ise "Buonasera" denir. "Buonanotte" ise yalnızca gece yatmadan önce söylenir.'
  },
  {
    id: 'fi10',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'İtalya\'ya yeni gelen bir kadın arkadaşınıza (Giulia) "Roma\'ya hoş geldin!" demek için boşluğa hangisi gelmelidir?',
    italianContext: 'Ciao Giulia, _______ a Roma!',
    options: ['benvenuta', 'benvenuto', 'benvenuti', 'benvenute'],
    correctAnswer: 'benvenuta',
    explanation: 'Tekil bir kadına (Giulia) "benvenuta", tekil bir erkeğe "benvenuto", çoğul gruba ise "benvenuti" denir.'
  },
  {
    id: 'fi11',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Resmi bir ortamda tanımadığınız bir beye hitap ederken "Affedersiniz, İtalyan mısınız?" sorusu için hangi ikili kullanılmalıdır?',
    italianContext: '_______, Signor Conti, _______ italiano?',
    options: ['Scusi / è', 'Scusa / sei', 'Scusi / sei', 'Scusa / è'],
    correctAnswer: 'Scusi / è',
    explanation: 'Resmi nezaket dilinde (Lei) hitap "Scusi!" ve fiil 3. tekil şahıs "è" (essere) olmalıdır.'
  },
  {
    id: 'fi12',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'Aşağıdaki karşılıklı konuşmaların hangisinde hitap şekli İNFORMEL (samimi / tu) düzeydedir?',
    italianContext: 'Diyaloglardaki hitap şekillerini inceleyiniz:',
    options: [
      '— Ciao Marco, come stai? — Bene, grazie, e tu?',
      '— Buongiorno Signora, come sta? — Molto bene, grazie, e Lei?',
      '— Scusi professore, di dove è? — Sono di Bologna.',
      '— ArrivederLa Dottore! — Buona giornata.'
    ],
    correctAnswer: '— Ciao Marco, come stai? — Bene, grazie, e tu?',
    explanation: '"Ciao", "come stai?" ve "e tu?" ifadeleri samimi (informel) dile aittir.'
  },

  // ==========================================
  // 3. Artikeller (Unità 1 & 2) - 13 Soru
  // ==========================================
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
    explanation: 'Sesliyle başlayan eril isimler kesme işareti ALMAZ (un amico). Dişil isimler ise kesme işareti ALIR (un\'amica).'
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
  {
    id: 'art5',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«_______ ragazzo, _______ studente, _______ amico» kelimelerinin başına sırasıyla hangi belirli artikeller (determinativi) gelmelidir?',
    italianContext: 'In classe ci sono: _______ ragazzo italiano, _______ studente spagnolo e _______ amico di Marco.',
    options: ['il / lo / l\'', 'lo / il / l\'', 'il / l\' / lo', 'un / uno / un'],
    correctAnswer: 'il / lo / l\'',
    explanation: 'Standart ünsüzle başlayanlar "il" (il ragazzo), s+ünsüz veya z ile başlayanlar "lo" (lo studente), sesli harfle başlayanlar ise "l\'" (l\'amico) alır.'
  },
  {
    id: 'art6',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«l\'orologio» (kol saati) ve «l\'albero» (ağaç) kelimelerinin çoğul belirli artikelleriyle doğru yazılışı hangisidir?',
    italianContext: 'Nel negozio vendono _______ di marca e nel giardino ci sono _______ secolari.',
    options: [
      'i orologi / i alberi',
      'gli orologi / gli alberi',
      'gli orologi / i alberi',
      'le orologi / le alberi'
    ],
    correctAnswer: 'gli orologi / gli alberi',
    explanation: 'Tekilde sesli harfle başlayıp "l\'" alan eril isimlerin çoğul belirli artikeli daima "gli" olur: l\'orologio ➔ gli orologi, l\'albero ➔ gli alberi.'
  },
  {
    id: 'art7',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«arancia» (portakal) kelimesinin belirsiz tekil, belirli tekil ve belirli çoğul formları sırasıyla hangisidir?',
    italianContext: 'Vorrei _______ arancia. _______ arancia è dolce, ma _______ arance di Sicilia sono famose.',
    options: [
      'un arancia / l\'arancia / le arance',
      'una arancia / l\'arancia / le arance',
      'un\'arancia / l\'arancia / le arance',
      'un\'arancia / la arancia / gli arance'
    ],
    correctAnswer: 'un\'arancia / l\'arancia / le arance',
    explanation: 'Dişil ve sesliyle başlayanlarda: Belirsizde "un\'arancia", belirlide "l\'arancia", çoğulda ise "le arance" olur.'
  },
  {
    id: 'art8',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«Al bar prendo _______ caffè e chiedo _______ scontrino alla cassa.» cümlesindeki boşluklara hangi belirsiz artikeller (indeterminativi) gelmelidir?',
    italianContext: 'Al bar: «Vorrei _______ caffè e per favore mi fa _______ scontrino?»',
    options: [
      'uno / un',
      'un / un',
      'un / uno',
      'il / lo'
    ],
    correctAnswer: 'un / uno',
    explanation: 'Normal ünsüzle başlayan eril isimler "un" (un caffè), s+ünsüz ile başlayanlar ise "uno" (uno scontrino) alır.'
  },
  {
    id: 'art9',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«psicologo» (psikolog) kelimesinin belirsiz tekil, belirli tekil ve belirli çoğul formları sırasıyla hangisidir?',
    italianContext: 'Oggi conosco _______ psicologo. A scuola vedo spesso _______ psicologo e incontro anche tutti _______ psicologi.',
    options: [
      'uno / lo / gli',
      'un / il / i',
      'uno / il / gli',
      'un / lo / i'
    ],
    correctAnswer: 'uno / lo / gli',
    explanation: '"ps" ile başlayan eril isimler belirsiz tekilde "uno" (uno psicologo), belirli tekilde "lo" (lo psicologo) ve belirli çoğulda "gli" (gli psicologi) artikeli alır.'
  },
  {
    id: 'art10',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«aula» (derslik/amfi) kelimesinin belirsiz tekil, belirli tekil ve belirli çoğul artikelli formları sırasıyla hangisidir?',
    italianContext: 'Cerchiamo _______ aula libera. Ora _______ aula è aperta e tutte _______ aule sono pronte.',
    options: [
      "un'aula / l'aula / le aule",
      'un aula / la aula / le aule',
      "un'aula / la aula / gli aule",
      "una aula / l'aula / i aule"
    ],
    correctAnswer: "un'aula / l'aula / le aule",
    explanation: "Sesli harfle başlayan dişil isimlerde: Belirsizde un'aula, belirlide l'aula, çoğulda le aule olur."
  },
  {
    id: 'art11',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: 'Sınıf eşyaları olan «banco» (eril), «sedia» (dişil) ve «lavagna» (dişil) kelimelerinin çoğul belirli artikelleri sırasıyla hangileridir?',
    italianContext: 'In classe vediamo: _______ banchi, _______ sedie e _______ lavagne.',
    options: [
      'i / le / le',
      'gli / le / i',
      'i / i / le',
      'gli / le / le'
    ],
    correctAnswer: 'i / le / le',
    explanation: 'Normal ünsüzle başlayan eril isimlerin çoğulu "i" (i banchi), dişillerin çoğulu ise "le" (le sedie, le lavagne) olur.'
  },
  {
    id: 'art12',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: 'Aşağıdaki cümlede boş bırakılan yerlere sırasıyla hangi belirsiz artikeller (indeterminativi) gelmelidir?',
    italianContext: 'Oggi conosco _______ studente simpatico, compro _______ orologio nuovo, invito _______ amica italiana e preparo _______ pizza.',
    options: [
      "uno / un / un' / una",
      "un / un' / un' / una",
      "uno / un / una / una",
      "un / uno / un' / una"
    ],
    correctAnswer: "uno / un / un' / una",
    explanation: "uno studente (s+ünsüz), un orologio (eril sesli), un'amica (dişil sesli), una pizza (dişil ünsüz)."
  },
  {
    id: 'art13',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«banco», «studente» ve «amico» kelimelerinin çoğul belirli artikelleri (determinativi plurali) sırasıyla hangileridir?',
    italianContext: 'In aula contiamo: _______ banchi puliti, _______ studenti attenti e _______ amici simpatici.',
    options: [
      'i / gli / gli',
      'gli / i / gli',
      'i / i / gli',
      'gli / gli / i'
    ],
    correctAnswer: 'i / gli / gli',
    explanation: 'Standart ünsüz eril: i banchi; s+ünsüz: gli studenti; sesli eril: gli amici.'
  },

  // ==========================================
  // 4. Fiil Çekimleri (Unità 1 & 2) - 13 Soru
  // ==========================================
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
    explanation: '-ARE grubu fiillerde 3. çoğul şahıs (loro / i ragazzi) eki her zaman "-ano"dur: abitare ➔ abitano.'
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
  {
    id: 'v5',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Chiudi la finestra per favore! Io _______ molto freddo.» cümlesindeki boşluğa hangi fiil gelmelidir?',
    italianContext: 'Chiudi la finestra per favore! Io _______ molto freddo.',
    options: ['ho', 'sono', 'sto', 'faccio'],
    correctAnswer: 'ho',
    explanation: 'Üşümek (avere freddo) durumu "AVERE" fiiliyle aktarılır: "Io ho molto freddo".'
  },
  {
    id: 'v6',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: 'Resmi bir ortamda "Nasılsınız, Profesör Rossi? — İyiyim, teşekkürler." diyaloğundaki boşluklara sırasıyla hangileri gelmelidir?',
    italianContext: 'Buongiorno professore, come _______ ? — _______ bene, grazie!',
    options: ['sta / Sto', 'stai / Sto', 'è / Sono', 'sta / Sono'],
    correctAnswer: 'sta / Sto',
    explanation: 'Nezaket dilinde hal-hatır sorarken "stare" fiilinin 3. tekil şahsı kullanılır: "Come sta?". Yanıtta ise "Sto bene".'
  },
  {
    id: 'v7',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Marco ed io _______ (ascoltare) sempre la musica italiana.» cümlesinde boşluğa hangi fiil çekimi gelmelidir?',
    italianContext: 'Marco ed io _______ sempre la musica italiana.',
    options: ['ascoltiamo', 'ascoltano', 'ascoltate', 'ascolta'],
    correctAnswer: 'ascoltiamo',
    explanation: '"Marco ed io" öznesi 1. çoğul şahıs "noi" (biz) yerine geçer: ascoltiamo.'
  },
  {
    id: 'v8',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Ragazzi, voi di dove _______ ? — Noi _______ di Roma.» diyaloğunda boşluklara hangi "essere" çekimleri gelmelidir?',
    italianContext: 'Ragazzi, voi di dove _______ ? — Noi _______ di Roma.',
    options: ['siete / siamo', 'sono / siamo', 'siete / sono', 'sono / siete'],
    correctAnswer: 'siete / siamo',
    explanation: '"voi" (siz) için "siete", "noi" (biz) için "siamo" çekimi kullanılır.'
  },
  {
    id: 'v9',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Marta oggi non studia in biblioteca perché _______ un forte mal di testa.» cümlesindeki boşluğa hangi fiil çekimi gelmelidir?',
    italianContext: 'Marta oggi non studia in biblioteca perché _______ un forte mal di testa.',
    options: ['è', 'ha', 'sta', 'fa'],
    correctAnswer: 'ha',
    explanation: 'Baş ağrısı "avere mal di testa" kalıbıyla ifade edilir. 3. tekil şahıs (lei / Marta) için "ha"dır.'
  },
  {
    id: 'v10',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Ragazzi, che lingua _______ voi a casa?» — «Noi _______ sempre in italiano.» diyaloğunda boşluklara sırasıyla hangi fiil çekimleri gelmelidir?',
    italianContext: '«Ragazzi, che lingua _______ voi a casa?» — «Noi _______ sempre in italiano.»',
    options: ['parlano / parlate', 'parliamo / parlate', 'parlate / parliamo', 'parla / parlano'],
    correctAnswer: 'parlate / parliamo',
    explanation: 'voi eki "-ate" (parlate), noi eki "-iamo"dur (parliamo).'
  },
  {
    id: 'v11',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Come _______ i tuoi genitori?» — «Loro _______ molto bene, grazie!» diyaloğundaki boşluklara "stare" fiilinin hangi çekimleri gelmelidir?',
    italianContext: '«Come _______ i tuoi genitori?» — «Loro _______ molto bene, grazie!»',
    options: ['stanno / stanno', 'sono / sono', 'state / stiamo', 'sta / sta'],
    correctAnswer: 'stanno / stanno',
    explanation: '"I tuoi genitori" ve "loro" 3. çoğul şahıs (loro) özneleridir; stare çekimi "stanno"dur.'
  },
  {
    id: 'v12',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Tu _______ paura del buio quando sei a casa da solo?» cümlesindeki boşluğa hangi fiil gelmelidir?',
    italianContext: '«Tu _______ paura del buio quando sei a casa da solo?»',
    options: ['sei', 'stai', 'fai', 'hai'],
    correctAnswer: 'hai',
    explanation: 'Korkmak "avere paura" kalıbıdır. 2. tekil şahıs "tu" için "hai" olur.'
  },
  {
    id: 'v13',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Tu e Marco che cosa _______ a pranzo?» — «Noi mangiamo un panino insieme.» diyaloğunda boşluğa hangi fiil çekimi gelmelidir?',
    italianContext: '«Tu e Marco che cosa _______ a pranzo?» — «Noi mangiamo un panino insieme.»',
    options: ['mangiano', 'mangiate', 'mangiamo', 'mangia'],
    correctAnswer: 'mangiate',
    explanation: '"Tu e Marco" öznesi "voi" (siz) zamirine karşılık gelir; -ARE fiillerinde voi eki "-ate"dir: mangiate.'
  },

  // ==========================================
  // 5. İsim & Sıfat Çoğulları (Unità 1) - 12 Soru
  // ==========================================
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
  {
    id: 'p4',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Maria e Giulia sono due ragazze _______ (inglese).» cümlesinde sıfatın doğru çoğul hali hangisidir?',
    italianContext: 'Maria e Giulia sono due ragazze _______ .',
    options: ['inglesi', 'inglese', 'inglesa', 'inglesie'],
    correctAnswer: 'inglesi',
    explanation: 'Sonu "-e" ile biten sıfatlar çoğulda her iki cins için de daima "-i" alır: una ragazza inglese ➔ due ragazze inglesi.'
  },
  {
    id: 'p5',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Marco e Sara sono _______ (italiano).» cümlesinde sıfat uyumu kuralına göre boşluğa ne gelmelidir?',
    italianContext: 'Marco e Sara studiano all\'università e sono _______ .',
    options: ['italiani', 'italiane', 'italiano', 'italiana'],
    correctAnswer: 'italiani',
    explanation: 'Karma cinsiyetli çoğul gruplarda sıfat her zaman eril çoğul (maschile plurale) "-i" ile biter: italiani.'
  },
  {
    id: 'p6',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Paolo e Marco sono due _______ (amico) molto _______ (simpatico).» cümlesinde boşluklara sırasıyla ne gelmelidir?',
    italianContext: 'Paolo e Marco sono due _______ molto _______ .',
    options: [
      'amici / simpatici',
      'amichi / simpatici',
      'amici / simpatiche',
      'amichi / simpatiche'
    ],
    correctAnswer: 'amici / simpatici',
    explanation: 'Eril çoğulda -co ➔ -ci olur: amico ➔ amici ve simpatico ➔ simpatici.'
  },
  {
    id: 'p7',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '"la chiave nuova" tamlamasının çoğul hali hangisidir?',
    italianContext: 'Sul tavolo ci sono _______ .',
    options: ['le chiavi nuove', 'le chiave nuove', 'le chiavi nuovi', 'i chiavi nuovi'],
    correctAnswer: 'le chiavi nuove',
    explanation: 'Dişil isim "chiave" -e ➔ -i kuralıyla "chiavi" olur (artikeli "le"). Sıfat "nuova" ise -a ➔ -e ile "nuove" olur.'
  },
  {
    id: 'p8',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Al bar prendiamo due _______ (caffè), per favore!» cümlesinde sonu vurgulu biten "caffè" kelimesinin çoğul hali hangisidir?',
    italianContext: 'Al bar: «Prendiamo due _______ , per favore!»',
    options: ['caffi', 'caffè', 'caffès', 'caffetti'],
    correctAnswer: 'caffè',
    explanation: 'Sonu vurgulu ünlüyle biten tekil kelimeler çoğulda değişmez (invariabile): un caffè ➔ due caffè.'
  },
  {
    id: 'p9',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Zeynep e Leyla sono due ragazze _______ (turco).» cümlesinde sıfat dişil çoğul isme (ragazze) nasıl uyum sağlar?',
    italianContext: 'Zeynep e Leyla sono due ragazze _______ .',
    options: ['turchi', 'turce', 'turche', 'turchese'],
    correctAnswer: 'turche',
    explanation: 'Sonu -ca ile biten dişil sıfatlar sert "K" sesini korumak için çoğulda "-che" alır: turca ➔ turche.'
  },
  {
    id: 'p10',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«In questa città ci sono due _______ (università) molto _______ (grande).» cümlesinde isim ve sıfatın çoğul halleri sırasıyla hangisidir?',
    italianContext: 'In questa città ci sono due _______ molto _______ .',
    options: [
      'università / grandi',
      'università / grande',
      'universite / grandi',
      'università / grandie'
    ],
    correctAnswer: 'università / grandi',
    explanation: 'Sonu vurgulu ünlüyle biten "università" ismi çoğulda değişmez. "-e" bitişli sıfat "grande" ise çoğulda "-i" alarak "grandi" olur.'
  },
  {
    id: 'p11',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Luca e Claudia sono due colleghi molto _______ (bravo).» cümlesinde sıfat uyumu kuralına göre boşluğa ne gelmelidir?',
    italianContext: 'Luca e Claudia lavorano insieme e sono molto _______ .',
    options: ['brave', 'bravo', 'bravie', 'bravi'],
    correctAnswer: 'bravi',
    explanation: 'Karma cinsiyetli çoğul öznelerde sıfat daima eril çoğul "-i" takısını alır: bravi.'
  },
  {
    id: 'p12',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Paola e Francesca sono due care _______ (amica) _______ (spagnolo).» cümlesinde isim ve sıfatın çoğul halleri sırasıyla hangisidir?',
    italianContext: 'Paola e Francesca sono due care _______ _______ .',
    options: [
      'amici spagnoli',
      'amiche spagnole',
      'amice spagnole',
      'amiche spagnoli'
    ],
    correctAnswer: 'amiche spagnole',
    explanation: 'amica ➔ amiche (sert ses koruması); spagnola ➔ spagnole: amiche spagnole.'
  },

  // ==========================================
  // 6. Sayılar & Edatlar (Unità 1 & 2) - 11 Soru
  // ==========================================
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
  {
    id: 'n3',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Di dove sei?» — «Sono _______ Ankara, ma adesso studio _______ Milano.» cümlesinde boşluklara sırasıyla hangi edatlar gelmelidir?',
    italianContext: '«Di dove sei?» — «Sono _______ Ankara, ma adesso studio _______ Milano.»',
    options: ['di / a', 'da / in', 'a / in', 'di / in'],
    correctAnswer: 'di / a',
    explanation: 'Doğum yeri ve köken için "di" (Sono di Ankara), bir şehirde okurken veya yaşarken "a" (studio a Milano) kullanılır.'
  },
  {
    id: 'n4',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '33 ve 48 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'Mio padre ha 48 anni e mia madre ne ha 33.',
    options: [
      'trentatré / quarantotto',
      'trentatre / quarantaotto',
      'trentatré / quarantaotto',
      'trentatre / quarantotto'
    ],
    correctAnswer: 'trentatré / quarantotto',
    explanation: 'Bileşik sayılarda 3 daima akut aksanlıdır: "trentatré". 8 ile başlayan sayılarda onluğun son seslisi düşer: "quarantotto".'
  },
  {
    id: 'n5',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Prendi un cornetto _______ preferisci una brioche?» — «Prendo un cornetto, _______ non ho molta fame.» cümlesindeki boşluklara sırasıyla hangi bağlaçlar gelmelidir?',
    italianContext: '«Prendi un cornetto _______ preferisci una brioche?» — «Prendo un cornetto, _______ non ho molta fame.»',
    options: ['o / ma', 'e / oppure', 'ma / o', 'e / e'],
    correctAnswer: 'o / ma',
    explanation: 'Seçim sunarken "o" (veya), zıtlık bildiren durumda "ma" (ama) kullanılır.'
  },
  {
    id: 'n6',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '16 ve 17 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'In questa classe ci sono 16 ragazze e 17 ragazzi.',
    options: [
      'sedici / diciassette',
      'seidici / diciasette',
      'sedici / diecisette',
      'sedici / diciannove'
    ],
    correctAnswer: 'sedici / diciassette',
    explanation: '16 sayısı "sedici", 17 sayısı çift "s" ve çift "t" ile "diciassette"dir.'
  },
  {
    id: 'n7',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '14, 17 ve 18 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'In classe ci sono 14 studenti di 17 anni e un ragazzo di 18 anni.',
    options: [
      'quattordici / diciassette / diciotto',
      'quatordici / diciasette / diciasotto',
      'quattordici / diciasette / diciotto',
      'quatordici / diciassette / diciootto'
    ],
    correctAnswer: 'quattordici / diciassette / diciotto',
    explanation: '14 çift "t" ile quattordici, 17 çift "s" ve çift "t" ile diciassette, 18 ise diciotto şeklinde yazılır.'
  },
  {
    id: 'n8',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Di dove sei?» — «Sono _______ Napoli, ma adesso abito _______ Spagna, _______ Madrid.» cümlesindeki boşluklara sırasıyla hangi edatlar gelmelidir?',
    italianContext: '«Di dove sei?» — «Sono _______ Napoli, ma adesso abito _______ Spagna, _______ Madrid.»',
    options: [
      'di / in / a',
      'da / a / in',
      'di / a / in',
      'in / in / a'
    ],
    correctAnswer: 'di / in / a',
    explanation: 'Şehir kökeninde "di" (di Napoli), ülkede bulunurken "in" (in Spagna), şehirde bulunurken "a" (a Madrid) kullanılır.'
  },
  {
    id: 'n9',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Prendi una pizza _______ preferisci un primo?» — «Prendo una pizza, _______ senza cipolla. Tu studi con Marco _______ Elena?» cümlesindeki boşluklara sırasıyla hangi bağlaçlar gelmelidir?',
    italianContext: '«Prendi una pizza _______ preferisci un primo?» — «Prendo una pizza, _______ senza cipolla. Tu studi con Marco _______ Elena?»',
    options: [
      'oppure / ma / ed',
      'e / oppure / ed',
      'ma / ed / oppure',
      'oppure / ed / ma'
    ],
    correctAnswer: 'oppure / ma / ed',
    explanation: 'Alternatifte "oppure" (veya), zıtlıkta "ma" (ama), aynı sesliyle başlayan sözcüğün önünde ahenk için "ed" kullanılır.'
  },
  {
    id: 'n10',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '23, 28 ve 41 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'Nel nostro corso ci sono 23 ragazzi, 28 ragazze e la professoressa ha 41 anni.',
    options: [
      'ventitré / ventotto / quarantuno',
      'ventitre / ventiotto / quarantauno',
      'ventitré / ventiotto / quarantuno',
      'ventitre / ventotto / quarantauno'
    ],
    correctAnswer: 'ventitré / ventotto / quarantuno',
    explanation: 'ventitré (akut aksanlı), ventotto (sesli düşmesi), quarantuno (sesli düşmesi).'
  },
  {
    id: 'n11',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '31, 70 ve 73 sayılarının İtalyanca doğru yazılışı hangisidir?',
    italianContext: 'Mio zio ha 70 anni, mio padre ne ha 73 e mia sorella ha 31 anni.',
    options: [
      'trentuno / settanta / settantatré',
      'trentauno / sessanta / settantatre',
      'trentuno / sessanta / settantatré',
      'trentauno / settanta / settantatre'
    ],
    correctAnswer: 'trentuno / settanta / settantatré',
    explanation: 'trentuno (a düşmesi), settanta (70), settantatré (akut aksanlı 73).'
  },

  // ==========================================
  // 7. Sınıf Eşyaları Sözlüğü & Test 1 Simülasyonu - 11 Soru
  // ==========================================
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
  {
    id: 'voc2',
    category: 'vocabolario',
    categoryLabel: 'Sözlük & Sınıf Eşyaları',
    prompt: '"Sırt çantası", "sıra" ve "sandalye" kelimelerinin İtalyanca karşılıkları belirli artikelleriyle (articoli determinativi) birlikte hangisinde doğrudur?',
    italianContext: 'Nell\'aula ci sono i banchi, le sedie e gli zaini degli studenti.',
    options: [
      'lo zaino / il banco / la sedia',
      'il zaino / il banco / la sedia',
      'lo zaino / lo banco / il sedia',
      'un zaino / un banco / una sedia'
    ],
    correctAnswer: 'lo zaino / il banco / la sedia',
    explanation: '"Zaino" Z harfiyle başladığı için "lo", "banco" standart eril olduğu için "il", "sedia" dişil olduğu için "la" alır.'
  },
  {
    id: 'voc3',
    category: 'vocabolario',
    categoryLabel: 'Sözlük & Sınıf Eşyaları',
    prompt: '"Defter", "kurşun kalem" ve "duvar saati" kelimelerinin İtalyanca karşılıkları belirli artikelleriyle birlikte hangisinde doğru verilmiştir?',
    italianContext: 'Sul banco ci sono il quaderno e la matita; alla parete c\'è l\'orologio.',
    options: [
      'lo quaderno / il matita / l\'orologio',
      'il quaderno / la matita / l\'orologio',
      'il quaderno / la penna / il orologio',
      'un quaderno / una matita / un orologio'
    ],
    correctAnswer: 'il quaderno / la matita / l\'orologio',
    explanation: 'Defter = il quaderno, kurşun kalem = la matita, saat = l\'orologio.'
  },
  {
    id: 'voc4',
    category: 'vocabolario',
    categoryLabel: 'Sözlük & Sınıf Eşyaları',
    prompt: '"Silgi", "kalemtıraş" ve "keçeli kalem" kelimelerinin İtalyanca karşılıkları belirli artikelleriyle (articoli determinativi) birlikte hangisinde doğru verilmiştir?',
    italianContext: 'Nell\'astuccio di Marco ci sono una gomma, un temperamatite e tre pennarelli.',
    options: [
      'la gomma / il temperamatite / il pennarello',
      'il gomma / lo temperamatite / la pennarello',
      'la gomma / la temperamatite / lo pennarello',
      'una gomma / un temperamatite / un pennarello'
    ],
    correctAnswer: 'la gomma / il temperamatite / il pennarello',
    explanation: 'Silgi = la gomma (dişil), Kalemtıraş = il temperamatite (eril tekil), Keçeli kalem = il pennarello (eril).'
  },
  {
    id: 'voc5',
    category: 'vocabolario',
    categoryLabel: 'Sözlük & Sınıf Eşyaları',
    prompt: '"Çalışma masası / öğretmen masası", "pencere" ve "kapı" kelimelerinin İtalyanca karşılıkları belirli artikelleriyle birlikte hangi seçenekte doğru verilmiştir?',
    italianContext: 'Nell\'aula d\'italiano ci sono la scrivania del professore, la porta e due grandi finestre.',
    options: [
      'la scrivania / la finestra / la porta',
      'il banco / la finestra / il porta',
      'la scrivania / il finestra / la porta',
      'lo scrittoio / la finestra / la porta'
    ],
    correctAnswer: 'la scrivania / la finestra / la porta',
    explanation: 'Öğretmen masası = la scrivania, Pencere = la finestra, Kapı = la porta (üçü de dişildir).'
  },
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
  },
  {
    id: 'sim2',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: 'Resmi bir görüşmede (formale) «Affedersiniz, telefon numaranız nedir?» sorusu İtalyanca nasıl söylenir?',
    italianContext: 'In segreteria: — _______ ?',
    options: [
      '«Scusa, qual è il tuo numero di telefono?»',
      '«Scusi, qual\'è il tuo numero di telefono?»',
      '«Scusi, qual è il Suo numero di telefono?»',
      '«Scusa, come si chiama il Suo telefono?»'
    ],
    correctAnswer: '«Scusi, qual è il Suo numero di telefono?»',
    explanation: 'Formelde Scusa ➔ Scusi, il tuo ➔ il Suo olur. Ayrıca "qual è" asla kesme işareti almaz.'
  },
  {
    id: 'sim3',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: 'Kırtasiyede bir sırt çantasının ve tükenmez kalemlerin fiyatını sorarken boşluklara sırasıyla hangi ifadeler gelmelidir?',
    italianContext: 'In cartoleria: — Scusi, _______ questo zaino? E queste penne, _______ ?',
    options: [
      'quanto costa / quanto costano',
      'quanto costano / quanto costa',
      'quanto costa / quanto costa',
      'quanto costano / quanto costano'
    ],
    correctAnswer: 'quanto costa / quanto costano',
    explanation: 'Tekil nesneler için "quanto costa", çoğul nesneler için "quanto costano" kullanılır.'
  },
  {
    id: 'sim4',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: 'Sınıf tanıtımı yapılırken "Nell\'aula _______ una grande lavagna e _______ venti banchi con le sedie." cümlesindeki boşluklara sırasıyla hangileri gelmelidir?',
    italianContext: 'Descrizione della classe: — Nell\'aula _______ una grande lavagna e _______ venti banchi.',
    options: [
      'c\'è / ci sono',
      'ci sono / c\'è',
      'c\'è / c\'è',
      'ci sono / ci sono'
    ],
    correctAnswer: 'c\'è / ci sono',
    explanation: 'Tekil isimden önce "c\'è" (c\'è una grande lavagna), çoğul isimden önce "ci sono" (ci sono venti banchi) kullanılır.'
  },
  {
    id: 'sim5',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: '«Ciao Marco! Come stai? Di dove sei? Studi o lavori?» samimi (informale) diyaloğunu bir kurs sekreterine veya öğretim görevlisine hitap edecek şekilde resmiye (formale) dönüştürünüz:',
    italianContext: 'Trasforma la frase dal registro informale a quello formale (dare del Lei):',
    options: [
      '«Buongiorno! Come sta? Di dove è? Studia o lavora?»',
      '«Ciao! Come sta? Di dove sei? Studi o lavori?»',
      '«Buongiorno! Come stai? Di dove è? Studia o lavora?»',
      '«Arrivederci! Lei come sta? Di dove sei? Lavora o studia?»'
    ],
    correctAnswer: '«Buongiorno! Come sta? Di dove è? Studia o lavora?»',
    explanation: 'Formale dönüşüm: Ciao ➔ Buongiorno, come stai ➔ come sta, di dove sei ➔ di dove è, studi o lavori ➔ studia o lavora.'
  },
  {
    id: 'sim6',
    category: 'vize_simulazione',
    categoryLabel: 'Vize Sınavı Simülasyonu (Test 1)',
    prompt: 'Kırtasiyede (in cartoleria) geçen bir diyalogda bir kitabın ve üç kalemin fiyatını sorarken ve yanıtlarken boşluklara sırasıyla hangi fiil çekimleri gelmelidir?',
    italianContext: 'In cartoleria: \n— Scusi, quanto _______ questo libro? \n— _______ 12 euro. \n— E queste tre penne, quanto _______ ? \n— _______ 6 euro.',
    options: [
      'costa / Costa / costano / Costano',
      'costano / Costano / costa / Costa',
      'costa / È / costano / Sono',
      'costa / costa / costano / costano'
    ],
    correctAnswer: 'costa / Costa / costano / Costano',
    explanation: 'Tekil için "quanto costa? - Costa 12 euro", çoğul için "quanto costano? - Costano 6 euro" kullanılır.'
  }
];
