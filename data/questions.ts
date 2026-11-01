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
  // 1. Fonetica & Telaffuz (Unità 0)
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

  // ==========================================
  // 2. Formale vs Informale (Unità 1 & Test 1)
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
    explanation: '3. tekil şahıs "è" kullanıldığı ve unvan (Signora Rossi) yer aldığı için bu soru formeldir (Nerelisiniz?). Arkadaşa "Di dove sei?" denir.'
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
    explanation: '"ArrivederLa", resmi nezaket dilindeki (Lei) muhataplar için kullanılan en formel vedalaşma şeklidir. "Arrivederci" nötr/standart, "Ciao" ise informeldir.'
  },
  {
    id: 'fi6',
    category: 'formale_informale',
    categoryLabel: 'Formale vs Informale',
    prompt: 'İtalyancada resmi hitapta (nezaket dili), karşınızdaki kişi bir ERKEK dahi olsa hangi özne zamiri kullanılır?',
    italianContext: 'Scusi, _______ è il Signor Bianchi?',
    options: ['Tu', 'Lui', 'Lei', 'Voi'],
    correctAnswer: 'Lei',
    explanation: 'İtalyancada nezaket dili (formale) hem kadınlar hem erkekler için daima 3. tekil şahıs olan "Lei" ile ifade edilir ve 3. tekil şahıs fiil çekimi alır.'
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

  // ==========================================
  // 3. Artikeller (Unità 1 & 2)
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
  {
    id: 'art5',
    category: 'articoli',
    categoryLabel: 'Artikeller (Determinativi & Indeterminativi)',
    prompt: '«_______ ragazzo, _______ studente, _______ amico» kelimelerinin başına sırasıyla hangi belirli artikeller (determinativi) gelmelidir?',
    italianContext: 'In classe ci sono: _______ ragazzo italiano, _______ studente spagnolo e _______ amico di Marco.',
    options: ['il / lo / l\'', 'lo / il / l\'', 'il / l\' / lo', 'un / uno / un'],
    correctAnswer: 'il / lo / l\'',
    explanation: 'İtalyancada eril tekil belirli artikeller üç temel gruba ayrılır: Standart ünsüzle başlayanlar "il" (il ragazzo), s+ünsüz veya z ile başlayanlar "lo" (lo studente), sesli harfle başlayanlar ise "l\'" (l\'amico) alır.'
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
    explanation: 'Tekilde sesli harfle başlayıp "l\'" alan eril isimlerin çoğul belirli artikeli "i" DEĞİL, istisnasız daima "gli" olur: l\'orologio ➔ gli orologi, l\'albero ➔ gli alberi.'
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
    explanation: 'Dişil ve sesli harfle başlayan isimlerde: Belirsiz tekilde kesme işareti kullanılır (un\'arancia); belirli tekilde "la" yerine "l\'" gelir (l\'arancia); çoğulda ise dişil çoğul artikeli her zaman "le"dir (kesme işareti almaz ve gli olmaz: le arance).'
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
    explanation: 'Eril isimlerde belirsiz artikel kuralları: Normal ünsüzle başlayanlar "un" alır (un caffè); "s + ünsüz" (sc, st, sp...) veya "z" ile başlayanlar ise "uno" alır (uno scontrino).'
  },

  // ==========================================
  // 4. Fiil Çekimleri (Unità 1 & 2)
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
  {
    id: 'v5',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Chiudi la finestra per favore! Io _______ molto freddo.» cümlesindeki boşluğa hangi fiil gelmelidir?',
    italianContext: 'Chiudi la finestra per favore! Io _______ molto freddo.',
    options: ['ho', 'sono', 'sto', 'faccio'],
    correctAnswer: 'ho',
    explanation: 'İtalyancada üşümek (avere freddo), sıcak hissetmek (avere caldo) ve uykusu olmak (avere sonno) gibi fiziksel durumlar "essere" ile değil "AVERE" fiiliyle aktarılır: "Io ho molto freddo".'
  },
  {
    id: 'v6',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: 'Resmi bir ortamda "Nasılsınız, Profesör Rossi? — İyiyim, teşekkürler." diyaloğundaki boşluklara sırasıyla hangileri gelmelidir?',
    italianContext: 'Buongiorno professore, come _______ ? — _______ bene, grazie!',
    options: ['sta / Sto', 'stai / Sto', 'è / Sono', 'sta / Sono'],
    correctAnswer: 'sta / Sto',
    explanation: 'Nezaket dilinde (formale - Lei) hal-hatır sorarken "stare" fiilinin 3. tekil şahsı kullanılır: "Come sta?". Yanıt verirken ise 1. tekil şahıs kullanılır: "Sto bene". Hal-hatır sormada "essere" fiili kullanılmaz.'
  },
  {
    id: 'v7',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Marco ed io _______ (ascoltare) sempre la musica italiana.» cümlesinde boşluğa hangi fiil çekimi gelmelidir?',
    italianContext: 'Marco ed io _______ sempre la musica italiana.',
    options: ['ascoltiamo', 'ascoltano', 'ascoltate', 'ascolta'],
    correctAnswer: 'ascoltiamo',
    explanation: '"Marco ed io" (Marco ve ben) öznesi 1. çoğul şahıs "noi" (biz) yerine geçer. Düzenli -ARE fiillerinde "noi" çekim eki "-iamo"dur: ascoltiamo.'
  },
  {
    id: 'v8',
    category: 'verbi',
    categoryLabel: 'Fiil Çekimleri (Essere, Avere, Stare, -ARE)',
    prompt: '«Ragazzi, voi di dove _______ ? — Noi _______ di Roma.» diyaloğunda boşluklara hangi "essere" çekimleri gelmelidir?',
    italianContext: 'Ragazzi, voi di dove _______ ? — Noi _______ di Roma.',
    options: ['siete / siamo', 'sono / siamo', 'siete / sono', 'sono / siete'],
    correctAnswer: 'siete / siamo',
    explanation: '"Essere" fiilinde "voi" (siz) için "siete", "noi" (biz) için "siamo" çekimi kullanılır (Io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono).'
  },

  // ==========================================
  // 5. İsim & Sıfat Çoğulları (Unità 1)
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
    explanation: 'Sonu "-e" ile biten sıfatlar (inglese, grande vb.) hem erilde hem dişilde tekil iken "-e", çoğulda ise her iki cins için de daima "-i" alır: una ragazza inglese ➔ due ragazze inglesi.'
  },
  {
    id: 'p5',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '«Marco e Sara sono _______ (italiano).» cümlesinde sıfat uyumu kuralına göre boşluğa ne gelmelidir?',
    italianContext: 'Marco e Sara studiano all\'università e sono _______ .',
    options: ['italiani', 'italiane', 'italiano', 'italiana'],
    correctAnswer: 'italiani',
    explanation: 'Öznelerden biri eril (Marco) diğeri dişil (Sara) olduğunda, yani karma cinsiyetli çoğul gruplarda sıfat her zaman eril çoğul (maschile plurale) "-i" ile biter: italiani.'
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
    explanation: 'Dişilde -ca ➔ -che olurken (amica ➔ amiche, simpatica ➔ simpatiche), eril çoğulda -co ➔ -ci olur: amico ➔ amici ve simpatico ➔ simpatici (asla "amichi" olmaz!).'
  },
  {
    id: 'p7',
    category: 'plurali',
    categoryLabel: 'İsim & Sıfat Çoğulları ve Uyum',
    prompt: '"la chiave nuova" tamlamasının çoğul hali hangisidir?',
    italianContext: 'Sul tavolo ci sono _______ .',
    options: ['le chiavi nuove', 'le chiave nuove', 'le chiavi nuovi', 'i chiavi nuovi'],
    correctAnswer: 'le chiavi nuove',
    explanation: 'Dişil isim "chiave" -e ➔ -i kuralıyla "chiavi" olur (artikeli "le"). Sıfatı "nuova" ise dişil kuralına uyarak -a ➔ -e ile "nuove" olur: "le chiavi nuove".'
  },

  // ==========================================
  // 6. Sayılar & Edatlar (Unità 1 & 2)
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
    explanation: 'İtalyancada doğum yeri ve memleket (köken) belirtirken şehirlerin önünde "di" (Sono di Ankara), bir şehirde yaşarken veya okurken ise "a" (studio a Milano) edatı kullanılır.'
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
    explanation: 'İtalyancada 3 (tre) sayısı bileşik sayılarda daima vurgulu/akut aksanlı yazılır: "trentatré" (ventitré, quarantatré). 1 (uno) ve 8 (otto) ile başlayan sayılarda ise onluğun son sesli harfi düşer: quaranta + otto = "quarantotto".'
  },
  {
    id: 'n5',
    category: 'numeri',
    categoryLabel: 'Sayılar ve Yer Edatları',
    prompt: '«Prendi un cornetto _______ preferisci una brioche?» — «Prendo un cornetto, _______ non ho molta fame.» cümlesindeki boşluklara sırasıyla hangi bağlaçlar gelmelidir?',
    italianContext: '«Prendi un cornetto _______ preferisci una brioche?» — «Prendo un cornetto, _______ non ho molta fame.»',
    options: ['o / ma', 'e / oppure', 'ma / o', 'e / e'],
    correctAnswer: 'o / ma',
    explanation: 'İlk cümlede iki alternatif arasında seçim sunulduğu için "o" (veya/ya da), ikinci cümlede ise zıtlık/kısıtlama bildiren bir durum olduğu için "ma" (ama/fakat) bağlacı kullanılır.'
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
    explanation: '11-16 arası sayılar "-dici" ekiyle biter: sedici (16). 17 sayısı ise "dicia-" köküyle başlar ve çift "s" ile çift "t" harfi içerir: diciassette (17).'
  },

  // ==========================================
  // 7. Sınıf Eşyaları Sözlüğü & Test 1 Simülasyonu
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
    explanation: '"Zaino" Z harfiyle başladığı için eril tekil belirli artikeli "lo" olur (lo zaino). "Banco" ünsüzle başlayan eril bir isimdir (il banco). "Sedia" ise dişil bir isimdir (la sedia).'
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
    explanation: 'Defter = il quaderno (sessizle başlayan eril isim), kurşun kalem = la matita (dişil isim; penna ise tükenmez kalemdir), duvar saati = l\'orologio (sesli harfle başlayan eril isim, l\' alır).'
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
    explanation: 'Formel (resmi) hitapta "Scusa" yerine "Scusi", "il tuo" yerine de saygı belirten büyük harfle "il Suo" kullanılır. Ayrıca İtalyancada "qual è" asla kesme işareti (apostrof) almaz.'
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
    explanation: 'Fiyat sorarken tekil nesneler için "quanto costa" (3. tekil şahıs: questo zaino costa...), çoğul nesneler için ise "quanto costano" (3. çoğul şahıs: queste penne costano...) kullanılır.'
  }
];
