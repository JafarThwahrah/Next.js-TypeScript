import { useRouter } from 'next/router'

const Reviews: React.FC = () => {
    const router = useRouter()
    const {productid, reviewId} = router.query
  return <h1>Review Number {reviewId} for the product Number {productid}</h1>;
};

export default Reviews;
