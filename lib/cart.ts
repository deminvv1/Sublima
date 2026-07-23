export type CartItem = {
  id: string;
  name: string;
  price: number;
  volume: string;
  image: string;
  qty: number;
};

const CART_KEY = "sublima_cart";
export const CART_EVENT = "sublima_cart_change";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function addToCart(item: Omit<CartItem, "qty">) {
  const cart = getCart();
  const existing = cart.find((i) => i.id === item.id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
}

export function updateCartQty(id: string, qty: number) {
  const cart = getCart();
  if (qty <= 0) {
    saveCart(cart.filter((i) => i.id !== id));
    return;
  }
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty = qty;
  saveCart(cart);
}

export function removeFromCart(id: string) {
  saveCart(getCart().filter((i) => i.id !== id));
}

export function clearCart() {
  saveCart([]);
}

export function cartQty(): number {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

export function cartTotal(): number {
  return getCart().reduce((sum, i) => sum + i.qty * i.price, 0);
}
