"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, getProducts } from "@/lib/products";
import { isValidEmail, isValidName, isValidPhone, sanitizePhoneInput } from "@/lib/validation";
import {
  CART_EVENT,
  CartItem,
  clearCart,
  getCart,
  removeFromCart,
  updateCartQty,
} from "@/lib/cart";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { withLineBreaks } from "@/lib/i18n/textUtils";
import StyledSelect from "./StyledSelect";
import styles from "./OrderForm.module.css";

type Field = "name" | "lastName" | "phone" | "email";
type Errors = Partial<Record<Field, string>>;

export default function OrderForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const products = getProducts(locale);
  const AROMA_OPTIONS = products.map((p) => ({
    value: String(p.id),
    label: (
      <>
        {p.num} · {p.namePlain}<em>{p.nameItalic}</em> — {p.sub}
      </>
    ),
  }));

  const searchParams = useSearchParams();
  const aromaParam = searchParams.get("aroma");
  const initialAroma = aromaParam && products.some((p) => String(p.id) === aromaParam) ? aromaParam : "";

  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const update = () => setCart(getCart());
    update();
    window.addEventListener(CART_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CART_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  const cartSubtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phone: "+7 ",
    email: "",
    aroma: initialAroma,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const validateField = (field: Field, value: string): string | undefined => {
    if (field === "name" && !isValidName(value)) return dict.validation.name;
    if (field === "lastName" && !isValidName(value)) return dict.validation.lastName;
    if (field === "phone") {
      if (!value.trim()) return dict.validation.phoneRequired;
      if (!isValidPhone(value)) return dict.validation.phoneInvalid;
    }
    if (field === "email" && !isValidEmail(value)) return dict.validation.emailInvalid;
    return undefined;
  };

  const handleChange = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const value = field === "phone" ? sanitizePhoneInput(raw) : raw;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleBlur = (field: Field) => (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, e.target.value) }));
  };

  const handleAromaChange = (aroma: string) => {
    setValues((prev) => ({ ...prev, aroma }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Errors = {
      name: validateField("name", values.name),
      lastName: validateField("lastName", values.lastName),
      phone: validateField("phone", values.phone),
      email: validateField("email", values.email),
    };
    setErrors(nextErrors);
    setConsentError(!consent);
    if (Object.values(nextErrors).some(Boolean) || !consent) return;
    if (cart.length > 0) clearCart();
    setSubmitted(true);
  };

  const visImage = "/images/foto-zakaz.webp";

  return (
    <div className={styles.page}>
      <div className={styles.vis}>
        <Image
          src={visImage}
          alt=""
          fill
          sizes="44vw"
          priority
          quality={90}
          className={styles["vis-img"]}
        />
        <div className={styles["vis-foot"]}>
          <div className={styles["vis-tag"]}>{dict.order.visTag}</div>
          <div className={styles["vis-quote"]}>
            {dict.order.visQuoteLine1}
            <br />
            <em>{dict.order.visQuoteItalic}</em>
          </div>
        </div>
      </div>

      <div className={styles["form-side"]}>
        <div className={styles["form-wrap"]}>
          {!submitted ? (
            <div>
              <div className={styles["f-eyebrow"]}>{dict.order.eyebrow}</div>
              <div className={styles["f-title"]}>
                {dict.consultTitle.plain} <em>{dict.consultTitle.italic}</em>
              </div>
              <div className={styles["f-sub"]}>{withLineBreaks(dict.order.subtitle)}</div>

              {cart.length > 0 && (
                <div className={styles.cartBlock}>
                  <div className={styles["cart-title"]}>{dict.order.cartTitle}</div>
                  <div className={styles["cart-list"]}>
                    {cart.map((item) => (
                      <div key={item.id} className={styles["cart-row"]}>
                        <div className={styles["cart-thumb"]}>
                          <Image src={item.image} alt="" fill sizes="48px" className={styles["cart-thumb-img"]} />
                        </div>
                        <div className={styles["cart-info"]}>
                          <div className={styles["cart-name"]}>{item.name}</div>
                          <div className={styles["cart-meta"]}>{item.volume}</div>
                          <div className={styles["cart-qty"]}>
                            <button
                              type="button"
                              aria-label={dict.order.qtyDecreaseAria}
                              onClick={() => updateCartQty(item.id, item.qty - 1)}
                            >
                              −
                            </button>
                            <span>{item.qty}</span>
                            <button
                              type="button"
                              aria-label={dict.order.qtyIncreaseAria}
                              onClick={() => updateCartQty(item.id, item.qty + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className={styles["cart-right"]}>
                          <div className={styles["cart-line-total"]}>
                            {formatPrice(item.price * item.qty, locale)} ₽
                          </div>
                          <button
                            type="button"
                            className={styles["cart-remove"]}
                            aria-label={dict.order.removeAria}
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles["cart-subtotal"]}>
                    <span>{dict.order.subtotalLabel}</span>
                    <span>{formatPrice(cartSubtotal, locale)} ₽</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className={styles["field-row"]}>
                  <div className={`${styles.field} ${errors.lastName ? styles.invalid : ""}`}>
                    <label>{dict.form.lastName}</label>
                    <input
                      type="text"
                      placeholder={dict.form.lastNamePlaceholder}
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      required
                    />
                    {errors.lastName && <div className={styles["field-error"]}>{errors.lastName}</div>}
                  </div>
                  <div className={`${styles.field} ${errors.name ? styles.invalid : ""}`}>
                    <label>{dict.form.name}</label>
                    <input
                      type="text"
                      placeholder={dict.form.namePlaceholder}
                      value={values.name}
                      onChange={handleChange("name")}
                      onBlur={handleBlur("name")}
                      required
                    />
                    {errors.name && <div className={styles["field-error"]}>{errors.name}</div>}
                  </div>
                </div>

                <div className={styles["field-row"]}>
                  <div className={`${styles.field} ${errors.phone ? styles.invalid : ""}`}>
                    <label>{dict.form.phone}</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={values.phone}
                      onChange={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      maxLength={18}
                      required
                    />
                    {errors.phone && <div className={styles["field-error"]}>{errors.phone}</div>}
                  </div>
                  <div className={`${styles.field} ${errors.email ? styles.invalid : ""}`}>
                    <label>{dict.form.email}</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                    {errors.email && <div className={styles["field-error"]}>{errors.email}</div>}
                  </div>
                </div>

                {cart.length === 0 && (
                  <div className={styles.field}>
                    <label>{dict.order.aromaLabel}</label>
                    <StyledSelect
                      options={AROMA_OPTIONS}
                      value={values.aroma}
                      onChange={handleAromaChange}
                      placeholder={dict.order.aromaPlaceholder}
                    />
                  </div>
                )}

                <div className={styles.field}>
                  <label>{dict.order.wishesLabel}</label>
                  <textarea placeholder={dict.order.wishesPlaceholder} />
                </div>

                <label className={`${styles.consent} ${consentError ? styles.invalid : ""}`}>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked) setConsentError(false);
                    }}
                  />
                  <span>
                    {dict.order.consentPrefix}{" "}
                    <Link href={href(locale, "/politika-konfidentsialnosti")}>
                      {dict.order.consentLink}
                    </Link>
                  </span>
                </label>
                {consentError && <div className={styles["field-error"]}>{dict.order.consentError}</div>}

                <div className={styles["submit-row"]}>
                  <button className={styles["btn-submit"]} type="submit">
                    {dict.order.submitBtn}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className={styles.success}>
              <div className={styles["success-ring"]}>✓</div>
              <div className={styles["success-title"]}>
                {dict.consultSuccessTitle.plain} <em>{dict.consultSuccessTitle.italic}</em>
              </div>
              <div className={styles["success-text"]}>{withLineBreaks(dict.order.successText)}</div>
              <Link className={styles["back-link"]} href={href(locale, "/kollektsiya")}>
                {dict.order.backLink}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
