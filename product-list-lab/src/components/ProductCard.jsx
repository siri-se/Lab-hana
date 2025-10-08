import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src =
              "https://placehold.co/300x300/cccccc/666666?text=No+Image";
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* TODO: นักศึกษาจะเพิ่ม rating stars ในส่วน Challenge */}
        <div className="product-rating">
            {renderStars(product.rating)} ({product.rating.toFixed(1)})
        </div>

        <div className="product-price">
          {product.discount > 0 && (
            <span className="original-price">
              ฿{product.originalPrice.toLocaleString()}
            </span>
          )}
          ฿{product.price.toLocaleString()}
          {product.discount > 0 && (
            <span className="discount"> ลด {product.discount}%</span>
          )}
        </div>

        <div className="product-actions">
          <button
            className="btn btn-secondary"
            onClick={() => onViewDetails(product)}
          >
            ดูรายละเอียด
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? "ใส่ตะกร้า" : "สินค้าหมด"}
          </button>
        </div>
      </div>
    </div>
  );
}

// TODO: นักศึกษาจะเพิ่ม PropTypes validation ในส่วน Challenge
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    inStock: PropTypes.bool,
    rating: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

//Star    
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return '★'.repeat(fullStars) + (hasHalfStar ? '⭐' : '') + '☆'.repeat(emptyStars);
};


export default ProductCard;
