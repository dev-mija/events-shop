import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const EVENTS = [
  {
    id: "p1",
    title: "Hi Stricker",
    price: 10,
    description: "A fun game of skill and precision",
  },
  {
    id: "p2",
    title: "Puch Challenge",
    price: 15,
    description: "A interesting game",
  },
  {
    id: "p3",
    title: "Bow & Arrow",
    price: 20,
    description: "A archery event",
  },
  {
    id: "p4",
    title: "Catch Fish",
    price: 8,
    description: "A game involving catching fish",
  }
];

const Products = (props) => {
  const products = EVENTS.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Book your favorite Events</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
