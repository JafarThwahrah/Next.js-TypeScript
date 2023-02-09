import { useRouter } from 'next/router'

const ProductDetails: React.FC = () => {
    const router = useRouter()
    const productId = router.query.productid
  return <h1>product Details {productId}</h1>;
};

export default ProductDetails;
