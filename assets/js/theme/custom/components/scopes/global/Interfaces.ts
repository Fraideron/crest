export interface CartIdPanel {
  cartId: string;
}

export interface ProductCardProps  {
  product: Product | Record<string, never>;
}

export interface Product {
  id: number;
  sku: null | string;
  name?: string;
  title?: string;
  url: string;
  customer?: Customer;
  brand: {
    name: string;
  };
  availability: string;
  summary: string;
  description: string;
  meta_description?: string;
  image: {
    data: string;
    alt: string;
  };
  qty_in_cart: number;
  pre_order: boolean;
  has_options: boolean;
  show_cart_action: boolean;
  stock_level?: number | null;
  low_stock_level?: number | null;
  weight: {
    formatted: string;
    value: number;
  };
  demo: boolean;
  date_added: string;
  add_to_wishlist_url: string;
  add_to_cart_url?: string;
  custom_fields?: CustomField[];
  images: Image[];
  rating: number;
  num_reviews: number;
  price: ProductPrice;
  category: string[];
}

export interface Image {
  data: string;
  alt: string;
}

export interface CustomField {
  id: number;
  name: string;
  value: string;
}

export interface ProductPrice {
  with_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  without_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  non_sale_price_without_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  non_sale_price_with_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  sale_price_without_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  sale_price_with_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  rrp_without_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  rrp_with_tax?: {
    formatted: string;
    value: number;
    currency: string;
  };
  saved?: {
    formatted: string;
    value: number;
    currency: string;
  };
  price_range?: {
    min: {
      with_tax?: {
        formatted: string;
        value: number;
        currency: string;
      };
      without_tax?: {
        formatted: string;
        value: number;
        currency: string;
      };
    };
    max: {
      with_tax?: {
        formatted: string;
        value: number;
        currency: string;
      };
      without_tax?: {
        formatted: string;
        value: number;
        currency: string;
      };
    };
  };
  tax_label: string;
}

export interface Customer {
  name?: string;
  id?: number;
  wishlists?: Wishlist[];
}

export interface Wishlist {
  num_items: number;
  id: number;
  name: string;
  is_public: boolean;
  token: string;
  view_url: string;
  edit_url: string;
  delete_url: string;
  share_url: string;
  add_url: string;
}
