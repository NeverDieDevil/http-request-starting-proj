import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "the first book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title={DUMMY_PRODUCTS.title}
          price={DUMMY_PRODUCTS.price}
          description={DUMMY_PRODUCTS.description}
        />
      </ul>
    </section>
  );
};

export default Products;
