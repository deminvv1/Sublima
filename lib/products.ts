import type { Locale } from "./i18n/config";

type LocalizedText = { ru: string; en: string };
type LocalizedList = { ru: string[]; en: string[] };

export type Product = {
  id: number;
  slug: string;
  num: string;
  namePlain: string;
  nameItalic: string;
  sub: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  price: number;
  volume: string;
  stock: number;
  sceneColor: string;
  images: {
    /** the 3 rotating slides shown on the collection page for this scene */
    collection: [string, string, string];
    hero: string;
    notesImg: string;
    heart: string;
    /** the rotating slider shown on the product page CTA section */
    cta: string[];
  };
  story: string;
};

type ProductSource = Omit<Product, "sub" | "notes" | "story"> & {
  sub: LocalizedText;
  notes: { top: LocalizedList; heart: LocalizedList; base: LocalizedList };
  story: LocalizedText;
};

const img = (n: number) => `/images/духи${n}.webp`;
/** Estragenesis ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const estraImg = (n: "" | 1 | 2 | 3) => `/images/Estragenesis/estragenesis${n}.webp`;
/** Waltz ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const waltzImg = (n: "" | 1 | 2 | 3) => `/images/Waltz/waltz${n}.webp`;
/** Chambon ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const chambonImg = (n: "" | 1 | 2 | 3) => `/images/Chambon/chambon${n}.webp`;
/** Sweetheart ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const sweetheartImg = (n: "" | 1 | 2 | 3) => `/images/Sweetheart/sweetheart${n}.webp`;
/** Înviere ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const inviereImg = (n: "" | 1 | 2 | 3) => `/images/Inviere/inviere${n}.webp`;
/** Journal ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const journalImg = (n: "" | 1 | 2 | 3) => `/images/Journal/journal${n}.webp`;
/** El Hank ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const elHankImg = (n: "" | 1 | 2 | 3) => `/images/El-Hank/el-hank${n}.webp`;
/** Secret T. ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const secretTImg = (n: "" | 1 | 2 | 3) => `/images/Secret-T/secret-t${n}.webp`;

const PRODUCT_SOURCES: ProductSource[] = [
  {
    // NOTE: price is a placeholder pending final pricing — update when confirmed.
    // "collection"/"cta" (the bottle-shot slots) borrow Noir d'Ambre's photos
    // as a stand-in until Estragenesis's own studio bottle photos arrive —
    // swap estraImg(...) below once those are in.
    id: 1,
    slug: "estragenesis",
    num: "№ 01",
    namePlain: "Estra",
    nameItalic: "genesis",
    sub: { ru: "Зелёный анималистический", en: "Green Animalic" },
    notes: {
      top: {
        ru: ["Ландыш", "Черёмуха", "Эстрагон", "Имбирь"],
        en: ["Lily of the Valley", "Bird Cherry", "Tarragon", "Ginger"],
      },
      heart: {
        ru: ["Почки тополя", "Ревень", "Цветочный мёд"],
        en: ["Poplar Buds", "Rhubarb", "Flower Honey"],
      },
      base: {
        ru: ["Сандаловое дерево", "Кастореум", "Мускус", "Ветивер", "Бензоин"],
        en: ["Sandalwood", "Castoreum", "Musk", "Vetiver", "Benzoin"],
      },
    },
    price: 19500,
    volume: "50 мл",
    stock: 5,
    sceneColor: "#5c5f3a",
    images: {
      collection: [img(1), img(3), img(4)],
      hero: estraImg(3),
      notesImg: estraImg(""),
      heart: estraImg(2),
      cta: [img(1), img(3), img(4)],
    },
    story: {
      ru: "Аромат посвящён воплощению контрастного сочетания двух природных доминант — растительного и животного миров. Баланс между травяной свежестью и пряной плотностью анималистичных нот отражает рождающуюся в этом единстве либидинальную энергию. Estragenesis — это баланс, равенство, мир и энергия. Вдохновение и влечение всегда берут начало в ресурсе, а ресурс — есть гармония.",
      en: "This fragrance is devoted to embodying a contrasting union between two dominant forces of nature — the vegetal and the animal. The balance between herbal freshness and the spiced density of animalic notes reflects the libidinal energy born from this unity. Estragenesis is balance, equality, peace, and energy. Inspiration and attraction always originate in resource, and resource is harmony.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Noir d'Ambre's
    // photos as a stand-in until Waltz's own studio bottle photos arrive —
    // swap waltzImg(...) below once those are in.
    id: 2,
    slug: "waltz",
    num: "№ 02",
    namePlain: "Wal",
    nameItalic: "tz",
    sub: { ru: "Гурманский амбровый", en: "Gourmand Amber" },
    notes: {
      top: {
        ru: ["Еловые ветви", "Молоко"],
        en: ["Spruce Branches", "Milk"],
      },
      heart: {
        ru: ["Вишня", "Лесной орех", "Горький шоколад"],
        en: ["Cherry", "Hazelnut", "Dark Chocolate"],
      },
      base: {
        ru: ["Бобы тонка", "Мускус", "Пачули", "Олибанум"],
        en: ["Tonka Bean", "Musk", "Patchouli", "Olibanum"],
      },
    },
    price: 18500,
    volume: "50 мл",
    stock: 3,
    sceneColor: "#7a1f2b",
    images: {
      collection: [img(1), img(3), img(4)],
      hero: waltzImg(1),
      notesImg: waltzImg(""),
      heart: waltzImg(2),
      cta: [img(1), img(3), img(4)],
    },
    story: {
      ru: "Юность — самый чувственный период, словно дышащий желаниями и стремлениями, а внутренний голос мелодичен, как праздничный вальс. Молодые люди светятся счастьем амбиций в головокружительном танце, сближающем души. Waltz — это вкус покорения первых вершин судьбы, из робкого становящийся терпким.",
      en: "Youth is the most sensual of seasons, breathing with desire and ambition, its inner voice as melodic as a festive waltz. Young hearts glow with the joy of ambition in a dizzying dance that draws souls together. Waltz is the taste of conquering fate's first summits — turning, from timid, into something rich and lasting.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Blanche Rose's
    // photos as a stand-in until Chambon's own studio bottle photos arrive —
    // swap chambonImg(...) below once those are in.
    id: 3,
    slug: "chambon",
    num: "№ 03",
    namePlain: "Cham",
    nameItalic: "bon",
    sub: { ru: "Кожаный цитрусовый", en: "Leather Citrus" },
    notes: {
      top: {
        ru: ["Шампанское", "Юдзу", "Красное яблоко"],
        en: ["Champagne", "Yuzu", "Red Apple"],
      },
      heart: {
        ru: ["Папирус", "Выделанная кожа"],
        en: ["Papyrus", "Tanned Leather"],
      },
      base: {
        ru: ["Кедровое дерево", "Ветивер", "Ваниль"],
        en: ["Cedarwood", "Vetiver", "Vanilla"],
      },
    },
    price: 21000,
    volume: "50 мл",
    stock: 5,
    sceneColor: "#6b4a2e",
    images: {
      collection: [img(5), img(7), img(5)],
      hero: chambonImg(2),
      notesImg: chambonImg(1),
      heart: chambonImg(""),
      cta: [img(5), img(7), img(5)],
    },
    story: {
      ru: "Шамбон — элемент сбруи для скаковой лошади, аксессуар, обеспечивающий контроль над силой и своенравным характером. Этот аромат посвящён своеобразной красоте власти. Доминантный нрав обладает сложной глубинной философией и имеет большое количество граней, порой скрывающихся в ослепительном свете роскоши.",
      en: "A chambon is a piece of tack for a racehorse — an accessory that grants control over strength and a willful nature. This fragrance is devoted to the singular beauty of power. A dominant character carries a complex, deep philosophy, its many facets sometimes hidden within the dazzling light of luxury.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Forêt Verte's
    // photos as a stand-in until Sweetheart's own studio bottle photos arrive —
    // swap sweetheartImg(...) below once those are in.
    id: 4,
    slug: "sweetheart",
    num: "№ 04",
    namePlain: "Sweet",
    nameItalic: "heart",
    sub: { ru: "Цветочный гурманский", en: "Floral Gourmand" },
    notes: {
      top: {
        ru: ["Бергамот", "Молочный улун"],
        en: ["Bergamot", "Milk Oolong"],
      },
      heart: {
        ru: ["Персик", "Тубероза", "Жасмин", "Сычуаньский перец"],
        en: ["Peach", "Tuberose", "Jasmine", "Sichuan Pepper"],
      },
      base: {
        ru: ["Сандал", "Пачули", "Синтетический мускус", "Ванилин"],
        en: ["Sandalwood", "Patchouli", "Synthetic Musk", "Vanillin"],
      },
    },
    price: 16800,
    volume: "50 мл",
    stock: 7,
    sceneColor: "#e0879a",
    images: {
      collection: [img(9), img(11), img(12)],
      hero: sweetheartImg(2),
      notesImg: sweetheartImg(""),
      heart: sweetheartImg(3),
      cta: [img(9), img(11), img(12)],
    },
    story: {
      ru: "Многогранный, динамичный, акцентный, сочетающий в себе несколько ольфакторных вселенных, — sweetheart символизирует искусство женственности. В нём представлена концепция контраста между социально желательным искусственным образом женщины и великими истинно женскими качествами, внушающими зависть и восхищение.",
      en: "Multifaceted, dynamic, striking, uniting several olfactory universes within itself — Sweetheart is a symbol of the art of femininity. It embodies the contrast between the socially desirable, artificial image of a woman and the great, truly feminine qualities that inspire envy and admiration.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Soleil d'Or's
    // photos as a stand-in until Înviere's own studio bottle photos arrive —
    // swap inviereImg(...) below once those are in.
    id: 5,
    slug: "inviere",
    num: "№ 05",
    namePlain: "Învi",
    nameItalic: "ere",
    sub: { ru: "Дымный шипровый", en: "Smoky Chypre" },
    notes: {
      top: {
        ru: ["Винный осадок", "Слива", "Чёрная смородина"],
        en: ["Wine Lees", "Plum", "Blackcurrant"],
      },
      heart: {
        ru: ["Пион", "Молоко", "Хвоя"],
        en: ["Peony", "Milk", "Pine Needles"],
      },
      base: {
        ru: ["Ладан", "Дубовый мох", "Древесный уголь"],
        en: ["Frankincense", "Oakmoss", "Charcoal"],
      },
    },
    price: 19200,
    volume: "50 мл",
    stock: 4,
    sceneColor: "#3a1930",
    images: {
      collection: [img(13), img(15), img(16)],
      hero: inviereImg(1),
      notesImg: inviereImg(3),
      heart: inviereImg(""),
      cta: [img(13), img(15), img(16)],
    },
    story: {
      ru: "Înviere с румынского переводится как «воскрешение», отсылая нас к готическим персонажам, призванным отразить необходимость символической «смерти» во благо трансформации. Этот аромат раскрывает философскую идею внутренних изменений и их субъективной цены. Чудо новой жизни мы способны понять, лишь увидев руины прошлого, — равно как не существует Света, не отбрасывающего Тень.",
      en: "Înviere translates from Romanian as \"resurrection,\" evoking gothic figures meant to reflect the necessity of a symbolic \"death\" in service of transformation. This fragrance reveals the philosophical idea of inner change and its subjective cost. The miracle of new life can only be understood once we have seen the ruins of the past — just as there is no Light that casts no Shadow.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Fumée Noire's
    // photos as a stand-in until Journal's own studio bottle photos arrive —
    // swap journalImg(...) below once those are in.
    id: 6,
    slug: "journal",
    num: "№ 06",
    namePlain: "Jour",
    nameItalic: "nal",
    sub: { ru: "Пудровый гурманский", en: "Powdery Gourmand" },
    notes: {
      top: {
        ru: ["Аккорд бумаги", "Ирисовое масло"],
        en: ["Paper Accord", "Iris Oil"],
      },
      heart: {
        ru: ["Кофе", "Сублимированная малина", "Хлопок"],
        en: ["Coffee", "Freeze-Dried Raspberry", "Cotton"],
      },
      base: {
        ru: ["Синтетический мускус", "Металлические ноты", "Кора дуба"],
        en: ["Synthetic Musk", "Metallic Notes", "Oak Bark"],
      },
    },
    price: 24500,
    volume: "50 мл",
    stock: 2,
    sceneColor: "#6b5744",
    images: {
      collection: [img(17), img(19), img(20)],
      hero: journalImg(3),
      notesImg: journalImg(""),
      heart: journalImg(2),
      cta: [img(17), img(19), img(20)],
    },
    story: {
      ru: "Каждый человек, избравший своей целью исцеление, сам познал боль, от которой стремится избавить других. Аромат journal — это способ увековечить масштаб личности профессионального психотерапевта, неочевидный обывателю. Не типичная похвала результатам и процессу работы, а сочувствие и уважение к причине, по которой целью жизни стало спасение чужих душ.",
      en: "Everyone who chooses healing as their purpose has known, firsthand, the pain they now strive to relieve in others. The fragrance Journal is a way to commemorate the scale of a professional psychotherapist's personality — one invisible to the layman. Not the typical praise for results and process, but compassion and respect for the reason that made saving other people's souls a life's purpose.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Mer Bleue's
    // photos as a stand-in until El Hank's own studio bottle photos arrive —
    // swap elHankImg(...) below once those are in.
    id: 7,
    slug: "el-hank",
    num: "№ 07",
    namePlain: "El",
    nameItalic: "Hank",
    sub: { ru: "Восточный пряный", en: "Oriental Spicy" },
    notes: {
      top: {
        ru: ["Марокканские пряности", "Орхидея", "Розовая вода"],
        en: ["Moroccan Spices", "Orchid", "Rose Water"],
      },
      heart: {
        ru: ["Инжир", "Какао", "Шафран", "Османтус"],
        en: ["Fig", "Cocoa", "Saffron", "Osmanthus"],
      },
      base: {
        ru: ["Амбра", "Пачули", "Бензоин", "Лабданум"],
        en: ["Amber", "Patchouli", "Benzoin", "Labdanum"],
      },
    },
    price: 15900,
    volume: "50 мл",
    stock: 8,
    sceneColor: "#c2571b",
    images: {
      collection: [img(21), img(23), img(24)],
      hero: elHankImg(2),
      notesImg: elHankImg(3),
      heart: elHankImg(1),
      cta: [img(21), img(23), img(24)],
    },
    story: {
      ru: "Прообраз главного маяка Марокко служит в этом аромате отражением необходимости познания и репрезентации своей уникальности. Каждая личность обладает красочной, самобытной индивидуальностью, культурой и историей рода. Но мастерство интегрировать опыт предков и своей социокультурной среды — это приобретённый навык, позволяющий принимать свою самость и проводить как соединительную линию, так и границу между собой и миром.",
      en: "The image of Morocco's principal lighthouse serves, in this fragrance, as a reflection of the need to know and represent one's own uniqueness. Every individual holds a colorful, distinctive identity, culture, and ancestral history. But the skill of integrating the experience of one's ancestors with one's sociocultural environment is an acquired skill — one that allows a person to accept their own selfhood, drawing both a connecting line and a boundary between themselves and the world.",
    },
  },
  {
    // NOTE: "collection"/"cta" (the bottle-shot slots) borrow Épice Rouge's
    // photos as a stand-in until Secret T.'s own studio bottle photos arrive —
    // swap secretTImg(...) below once those are in.
    id: 8,
    slug: "secret-t",
    num: "№ 08",
    namePlain: "Secret",
    nameItalic: "T.",
    sub: { ru: "Табачный кожаный", en: "Tobacco Leather" },
    notes: {
      top: {
        ru: ["Цветок табака", "Злаки", "Чёрный перец", "Кориандр"],
        en: ["Tobacco Flower", "Grains", "Black Pepper", "Coriander"],
      },
      heart: {
        ru: ["Табачный лист", "Тинктура таволги", "Липовый цвет", "Змеиный яд"],
        en: ["Tobacco Leaf", "Meadowsweet Tincture", "Lime Blossom", "Snake Venom"],
      },
      base: {
        ru: ["Хересовая бочковая щепа", "Цибетин", "Кожа", "Ладан", "Уд"],
        en: ["Sherry Cask Chips", "Civetone", "Leather", "Frankincense", "Oud"],
      },
    },
    price: 20400,
    volume: "50 мл",
    stock: 3,
    sceneColor: "#1c1712",
    images: {
      collection: [img(25), img(27), img(28)],
      hero: secretTImg(""),
      notesImg: secretTImg(1),
      heart: secretTImg(3),
      cta: [img(25), img(27), img(25)],
    },
    story: {
      ru: "Secret T. — единственный аромат коллекции без изображения своего вдохновителя. Благодаря своему характеру и компонентам в частности, он символизирует разрушительность разрыва связи с социальным и уход в глубинные слои фантазий. Обратная сторона самопознания — полная изоляция и диспропорция влечений, обретающая токсичный характер.",
      en: "Secret T. is the only fragrance in the collection with no image of its muse. Through its character, and its components in particular, it symbolizes the destructiveness of severing one's social ties and retreating into the deep layers of fantasy. The reverse side of self-knowledge is complete isolation and a disproportion of desires that takes on a toxic character.",
    },
  },
];

function localize(source: ProductSource, locale: Locale): Product {
  return {
    ...source,
    sub: source.sub[locale],
    notes: {
      top: source.notes.top[locale],
      heart: source.notes.heart[locale],
      base: source.notes.base[locale],
    },
    story: source.story[locale],
  };
}

export function getProducts(locale: Locale): Product[] {
  return PRODUCT_SOURCES.map((source) => localize(source, locale));
}

export function getProduct(locale: Locale, slug: string): Product | undefined {
  const source = PRODUCT_SOURCES.find((p) => p.slug === slug);
  return source ? localize(source, locale) : undefined;
}

export function getAllSlugs(): string[] {
  return PRODUCT_SOURCES.map((p) => p.slug);
}

export function stockLabel(stock: number, locale: Locale): string {
  if (locale === "en") return `In stock: ${stock} ${stock === 1 ? "bottle" : "bottles"}`;
  const mod10 = stock % 10;
  const mod100 = stock % 100;
  let word = "флаконов";
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = "флакон";
    else if (mod10 >= 2 && mod10 <= 4) word = "флакона";
  }
  return `В наличии: ${stock} ${word}`;
}

export function formatPrice(price: number, locale: Locale): string {
  return price.toLocaleString(locale === "en" ? "en-US" : "ru-RU");
}
