const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    brand: "Dell",
    inStock: true,
    desc: "High‑performance Dell laptop suitable for work and gaming.",
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    brand: "Samsung",
    inStock: false,
    desc: "Feature‑packed Samsung smartphone with an impressive display.",
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    brand: "Sony",
    inStock: true,
    desc: "Noise‑cancelling Sony headphones with crystal‑clear sound.",
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    id: 4,
    name: "Keyboard",
    price: 75,
    brand: "Logitech",
    inStock: true,
    desc: "Ergonomic Logitech keyboard perfect for long typing sessions.",
    image: "https://picsum.photos/200/300?random=4"
  }
];


const people = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    job: "Developer"
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    job: "Designer"
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    job: "Manager"
  },
  {
    id: 4,
    name: "Diana",
    age: 22,
    job: "Intern"
  }
];

module.exports = { products, people };
