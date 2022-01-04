import ProductCard from "../ProductCard/ProductCard";
import "./products.css";

const Products = ({ list }) => (
  <section className="products">
    {list.map((jacket) => (
      <ProductCard
        key={jacket.id}
        title={jacket.title}
        image={jacket.image}
        price={jacket.price}
      />
    ))}
  </section>
);

export default Products;
