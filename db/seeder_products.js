const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `Description for product ${i + 1}`,
  price: parseFloat((Math.random() * 100 + 1).toFixed(2)), // Precio entre 1 y 100
  inStock: Math.random() < 0.5 // true o false aleatorio
}));

console.log(products);
