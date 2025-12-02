import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../api/productAPI'

function ProductForm() {

    const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />

        <label htmlFor="instock">In Stock:</label>
        <input type="checkbox" id="instock" name="instock" />

        <button>Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
