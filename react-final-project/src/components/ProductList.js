import ProductCard from "./ProductCard.js";


const ProductList = ({ items = [], onProductCardClicked }) => {
    return (
      <div className="List">
        {items.map((item) => (
          <ProductCard 
            key={item.id} 
            image={item.image} 
            title={item.title} 
            price={item.price} 
            onClicked={() => onProductCardClicked(item.id)}
          />
        ))}
      </div>
    )
  };

export default ProductList;