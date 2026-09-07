import type { Locale } from "./i18n/config";

type LocalizedText = { ru: string; en: string };
type LocalizedList = { ru: string[]; en: string[] };

export const VOLUMES = [15, 50, 100] as const;
export type VolumeMl = (typeof VOLUMES)[number];
export const PRICE_BY_VOLUME: Record<VolumeMl, number> = {
  15: 11900,
  50: 29900,
  100: 49900,
};

export function volumeLabel(ml: number, locale: Locale): string {
  return locale === "en" ? `${ml} ml` : `${ml} мл`;
}

export type Product = {
  id: number;
  slug: string;
  num: string;
  namePlain: string;
  nameItalic: string;
  sub: string;
  notes: { top: string[]; heart: string[]; base: string[] };
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
const estraImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Estragenesis/estragenesis${n}.webp`;
/** Waltz ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const waltzImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Waltz/waltz${n}.webp`;
/** Chambon ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const chambonImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Chambon/chambon${n}.webp`;
/** Sweetheart ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const sweetheartImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Sweetheart/sweetheart${n}.webp`;
/** Înviere ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const inviereImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Inviere/inviere${n}.webp`;
/** Journal ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const journalImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Journal/journal${n}.webp`;
/** El Hank ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const elHankImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/El-Hank/el-hank${n}.webp`;
/** Secret T. ships with mood/concept photography only, pending studio
 * bottle shots — swap these paths once the real product photos arrive. */
const secretTImg = (n: "" | 1 | 2 | 3 | "-main-right") => `/images/Secret-T/secret-t${n}.webp`;

// "heart" section (02 — Сердце аромата) photos
const estraSinglePage = "/images/Estragenesis/estragenesis-single-page.webp";
const waltzSinglePage = "/images/Waltz/waltz-single-page.webp";
const chambonSinglePage = "/images/Chambon/chambon-single-page.webp";
const sweetheartSinglePage = "/images/Sweetheart/sweetheart-single-page.webp";
const inviereSinglePage = "/images/Inviere/inviere-single-page.webp";
const journalSinglePage = "/images/Journal/journal-single-page.webp";
const elHankSinglePage = "/images/El-Hank/el-hank-single-page.webp";
const secretTSinglePage = "/images/Secret-T/secret-t-single-page.webp";

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
        ru: ["Ландыш", "Имбирь", "Эстрагон", "Черёмуха"],
        en: ["Lily of the Valley", "Ginger", "Tarragon", "Bird Cherry"],
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
    stock: 5,
    sceneColor: "#5c5f3a",
    images: {
      collection: [img(1), img(3), img(4)],
      hero: estraImg("-main-right"),
      notesImg: estraImg(""),
      heart: estraSinglePage,
      cta: [img(1), img(3), img(4)],
    },
    story: {
      ru: "Этот аромат воплощает в себе контрастный союз двух доминирующих сил природы — растительной и животной. Баланс между травянистой свежестью и пряной насыщенностью теплых телесных нот отражает либидинальную энергию, рожденную из природного единства. Estragenesis — это стихийность, сила, энергия и равновесие. Вдохновение и влечение всегда берут начало в ресурсе, а ресурс — это гармония.",
      en: "This fragrance embodies a contrasting union of two dominant forces of nature — the botanical and the animalic. The balance between herbal freshness and the spicy intensity of warm skin-like notes reflects a libidinal energy born from natural unity. Estragenesis is raw spontaneity, power, energy, and equilibrium. Inspiration and attraction always originate from an inner resource, and that resource is harmony.",
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
        ru: ["Еловые ветви", "Молоко", "Сахар"],
        en: ["Spruce Branches", "Milk", "Sugar"],
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
    stock: 3,
    sceneColor: "#7a1f2b",
    images: {
      collection: [img(1), img(3), img(4)],
      hero: waltzImg("-main-right"),
      notesImg: waltzImg(""),
      heart: waltzSinglePage,
      cta: [img(1), img(3), img(4)],
    },
    story: {
      ru: "Юность - самый чувственный период, словно дышащий желаниями и стремлениями. Буря эмоций кружит голову в трепетном танце под грохот оркестра. Waltz - это ностальгический аромат о юности и первой любви. Воспоминания о главных свершениях, волнительных свиданиях и светлой меланхолии. Вкус робости, обретающий терпкость.",
      en: "Youth is the most sensuous age, breathing with desires and aspirations. A storm of emotion spins the senses in a tender dance to the rumble of an orchestra. Waltz is a nostalgic fragrance of youth and first love — memories of milestone moments, thrilling dates, and a luminous melancholy. The taste of shyness acquiring a tart, sophisticated edge.",
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
        ru: ["Папирус", "Выделанная кожа", "Ваниль"],
        en: ["Papyrus", "Tanned Leather", "Vanilla"],
      },
      base: {
        ru: ["Кедр", "Ветивер", "Гваяковое дерево", "Уд"],
        en: ["Cedar", "Vetiver", "Guaiac wood", "Oud"],
      },
    },
    stock: 5,
    sceneColor: "#6b4a2e",
    images: {
      collection: [img(5), img(7), img(5)],
      hero: chambonImg("-main-right"),
      notesImg: chambonImg(1),
      heart: chambonSinglePage,
      cta: [img(5), img(7), img(5)],
    },
    story: {
      ru: "Шамбон - элемент сбруи для скаковой лошади, аксессуар, обеспечивающий контроль над силой и своенравным характером. Этот аромат посвящен своеобразной красоте власти. Доминантный нрав обладает сложной глубинной философией и имеет множество граней, порой скрывающихся в ослепительном свете роскоши.",
      en: "The chambon is a piece of equestrian harness for a racehorse — an accessory that ensures control over raw power and a headstrong nature. This fragrance is dedicated to the distinctive beauty of authority. A dominant disposition possesses a complex, deep philosophy with many facets, sometimes veiled beneath the dazzling glow of luxury.",
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
        ru: ["Бергамот", "Молочный улун", "Сычуаньский перец"],
        en: ["Bergamot", "Milk Oolong", "Sichuan pepper"],
      },
      heart: {
        ru: ["Персик", "Тубероза", "Жасмин"],
        en: ["Peach", "Tuberose", "Jasmine"],
      },
      base: {
        ru: ["Сандал", "Пачули", "Синтетический мускус", "Ванилин"],
        en: ["Sandalwood", "Patchouli", "Synthetic Musk", "Vanillin"],
      },
    },
    stock: 7,
    sceneColor: "#e0879a",
    images: {
      collection: [img(9), img(11), img(12)],
      hero: sweetheartImg("-main-right"),
      notesImg: sweetheartImg(""),
      heart: sweetheartSinglePage,
      cta: [img(9), img(11), img(12)],
    },
    story: {
      ru: "Многогранный, динамичный, акцентный, сочетающий в себе несколько ольфакторных вселенных, - sweetheart символизирует искусство женственности. В нем представлена концепция контраста между социально желательным искусственным образом женщины и великими истинно женскими качествами, внушающими зависть и восхищение.",
      en: "Multifaceted, dynamic, and accentual — blending multiple olfactive universes — Sweetheart symbolizes the art of femininity. It presents the concept of contrast between a socially desirable, artificial image of a woman and the great, true feminine qualities that inspire envy and admiration.",
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
    stock: 4,
    sceneColor: "#3a1930",
    images: {
      collection: [img(13), img(15), img(16)],
      hero: inviereImg("-main-right"),
      notesImg: inviereImg(3),
      heart: inviereSinglePage,
      cta: [img(13), img(15), img(16)],
    },
    story: {
      ru: "Înviere с румынского переводится как «воскрешение», остылая нас к готическим метафорам, призванным отразить необходимость символической «смерти» во имя трансформации. Этот аромат раскрывает философскую идею внутренних изменений и их субъективной цены.Чудо новой жизи мы способны понять, лишь увидев руины прошлого, равно как не существует Света, не создающего Тень.",
      en: "Înviere derived from the Romanian word for \"Resurrection\", Înviere references gothic metaphors designed to reflect the necessity of a symbolic \"death\" in the name of transformation. This fragrance unravels the philosophical concept of inner change and its subjective price. We are only capable of understanding the miracle of new life once we witness the ruins of the past, just as there is no Light that does not cast a Shadow.",
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
        ru: ["Масло Ириса", "Аккорд бумаги", "Хлопок"],
        en: ["Iris Oil", "Paper Accord", "Cotton"],
      },
      heart: {
        ru: ["Кофе", "Сублимированная малина", "Аккорд горячего пара"],
        en: ["Coffee", "Freeze-Dried Raspberry", "Hot steam accord"],
      },
      base: {
        ru: ["Металлические ноты", "Синтетический мускус", "Дубовая Кора"],
        en: ["Metallic Notes", "Synthetic Musk", "Oak Bark"],
      },
    },
    stock: 2,
    sceneColor: "#6b5744",
    images: {
      collection: [img(17), img(19), img(20)],
      hero: journalImg("-main-right"),
      notesImg: journalImg(""),
      heart: journalSinglePage,
      cta: [img(17), img(19), img(20)],
    },
    story: {
      ru: "Каждый человек, избравший своей целью исцеление других, сам познал боль, от которой стремится избавить окружающих. Аромат journal - это способ продемонстрировать и увековечить обратную сторону психотерапевтического процесса - личность специалиста. Насыщенный, уникальный, ценный мир, обычно остающийся «за кадром».",
      en: "Every person who chooses to heal others has known the very pain they seek to relieve. Journal is a way to reveal and immortalize the hidden side of the psychotherapeutic process — the personality of the specialist. A rich, unique, and precious inner world that usually remains \"behind the scenes.\"",
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
        ru: ["Амбра", "Пачули", "Бензоин", "Лабданум", "Уд"],
        en: ["Amber", "Patchouli", "Benzoin", "Labdanum", "Oud"],
      },
    },
    stock: 8,
    sceneColor: "#c2571b",
    images: {
      collection: [img(21), img(23), img(24)],
      hero: elHankImg("-main-right"),
      notesImg: elHankImg(3),
      heart: elHankSinglePage,
      cta: [img(21), img(23), img(24)],
    },
    story: {
      ru: "Прообраз главного маяка Марокко служит в этом аромате отражением необходимости познания и репрезентации своей уникальности. Каждая личность обладает красочной, самобытной индивидуальностью, культурой и историей рода. Но мастерство интегрировать опыт предков и своей социокультурной среды - это приобретенный навык, позволяющий принимать свою самость и проводить как соединительную линию, так и границу между собой и миром.",
      en: "In this fragrance, the prototype of Morocco’s primary lighthouse serves as a reflection of the need to explore and represent one's own uniqueness. Every individual possesses a vivid, distinct personality, rich culture, and ancestral heritage. Yet, the mastery of integrating the wisdom of one's ancestors and sociocultural environment is an acquired skill — one that enables us to embrace our true self, drawing both a connecting line and a clear boundary between ourselves and the world.",
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
        ru: ["Цветок табака", "Чёрный перец", "Кориандр", "Лимон"],
        en: ["Tobacco Flower", "Black Pepper", "Coriander", "Limon"],
      },
      heart: {
        ru: ["Табачный лист", "Тинктура таволги", "Грибы"],
        en: ["Tobacco Leaf", "Meadowsweet Tincture", "Mushroom"],
      },
      base: {
        ru: ["Анималистичные ноты", "Кожа", "Ладан", "Хересная Щепа"],
        en: ["Animalic notes", "Leather", "Frankincense", "Sherry wood chips"],
      },
    },
    stock: 3,
    sceneColor: "#1c1712",
    images: {
      collection: [img(25), img(27), img(28)],
      hero: secretTImg("-main-right"),
      notesImg: secretTImg(1),
      heart: secretTSinglePage,
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
