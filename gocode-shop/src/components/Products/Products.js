import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const Products = ({ cat, getCatArr }) => (
  <section className="products">
    {getCatArr(cat).map((item) => (
      <ProductCard
        key={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        description={item.description}
        category={item.category}
        rating={item.rating}
      />
    ))}
  </section>
);

export default Products;
