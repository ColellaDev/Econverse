import type { ProductTypes } from '../types/product';

const API_URL = '/products.json';

export async function fetchProducts(): Promise<ProductTypes[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Erro ao buscar produtos: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.products as ProductTypes[];
}