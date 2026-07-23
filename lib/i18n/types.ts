export type Dictionary = {
  nav: {
    philosophy: string;
    collection: string;
    order: string;
    contacts: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleItalic: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollLabel: string;
  };
  homePhilosophy: {
    eyebrow: string;
    statement: string;
    detail: string;
  };
  footer: {
    copyright: string;
    privacyLink: string;
  };
  cookieConsent: {
    text: string;
    accept: string;
    policyLink: string;
  };
  collectionLabel: string;
  pyramidLabel: string;
  exploreBtn: string;
  prevPhotoAria: string;
  nextPhotoAria: string;
  /** "Заказать <em>консультацию</em>" split so the accent word stays italic */
  consultTitle: { plain: string; italic: string };
  consultSuccessTitle: { plain: string; italic: string };
  product: {
    topLabel: string;
    heartLabel: string;
    baseLabel: string;
    storyLabel: string;
    storySignature: string;
    consultBtn: string;
    addToCartBtn: string;
    addedLabel: string;
    toastTitle: string;
    toastLink: string;
    submitBtn: string;
    successText: string;
  };
  form: {
    lastName: string;
    lastNamePlaceholder: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    email: string;
  };
  order: {
    eyebrow: string;
    subtitle: string;
    cartTitle: string;
    subtotalLabel: string;
    removeAria: string;
    qtyDecreaseAria: string;
    qtyIncreaseAria: string;
    aromaLabel: string;
    aromaPlaceholder: string;
    wishesLabel: string;
    wishesPlaceholder: string;
    submitBtn: string;
    policy: string;
    successText: string;
    backLink: string;
    visTag: string;
    visQuoteLine1: string;
    visQuoteItalic: string;
  };
  validation: {
    name: string;
    phoneRequired: string;
    phoneInvalid: string;
    emailInvalid: string;
  };
  filosofiya: {
    eyebrow: string;
    titleLine1: string;
    titleItalic: string;
    statement: string;
    detail1: string;
    detail2: string;
    values: { title: string; text: string }[];
  };
  kontakty: {
    eyebrow: string;
    title: string;
    rows: { label: string; value: string }[];
  };
};
