import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/productAPI'

function Products() {
  const { isLoading, data: products, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>USD {product.price}</p>
          <div>
            <label htmlFor={product.id}>In Stock:</label>
            <input type="checkbox" id={product.id} checked={product.inStock} />
            <button id={product.id} onClick={() => console.log('Delete product')}>Delete</button>
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Products;
