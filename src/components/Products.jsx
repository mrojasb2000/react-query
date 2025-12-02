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
          {product.name}
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
        </div>
      ))}
    </>
  )
}

export default Products;
