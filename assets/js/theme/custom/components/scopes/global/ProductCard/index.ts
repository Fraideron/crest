import { createElement } from 'react';
import ReactDOM from 'react-dom';

import ProductCard from './ProductCard';
import { Product, ProductCardProps } from "../Interfaces";

const renderProductCard = (): void => {
  const elements = document.querySelectorAll<HTMLElement>('.react-product-card');
  if (!elements) return;
  const langTranslation = document.querySelector<HTMLElement>('.lang-translation');
  if (!langTranslation) {
    return;
  }

  const translations = langTranslation.dataset.langTranslation || '';
  Array.from(elements).forEach((el: HTMLElement) => {
    let product: Product | Record<string, never>;
    el.dataset.product ? (product = JSON.parse(el.dataset.product)) : (product = {});
    const data: ProductCardProps = {
      product,
    };

    ReactDOM.render(createElement(ProductCard, data, null), el);
  });
};

export default renderProductCard;
