import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/productAPI'

function Products() {
  const { isLoading, data, isError, error } = useQuery({
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
      {JSON.stringify(data)}
    </>
  )
}

export default Products;
