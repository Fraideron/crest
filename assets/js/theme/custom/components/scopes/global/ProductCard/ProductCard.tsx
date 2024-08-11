import './ProductCard.scss';

import React, { FC } from 'react';
import { ProductCardProps } from "../Interfaces";


const ProductCard: FC<ProductCardProps> = (props) => {
    const {
        name,
        title,
        summary,
        url,
        has_options,
        stock_level,
        add_to_cart_url,
        add_to_wishlist_url,
        images,
        rating,
        num_reviews,
        price,
        description,
        meta_description,
    } = props.product;

  console.log(props.product)

    return (
        <div className="product-card-container">
           <h3>product</h3>
        </div>
    );
};

export default ProductCard;
