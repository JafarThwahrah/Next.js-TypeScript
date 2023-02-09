import Link from "next/link";
const Product: React.FC<{ productId: number }> = ({ productId = 100 }) => {
  return (
    <>
      <Link href={"/"}>Home</Link>

      <h1>
        <Link href={"/product/1"}> product1</Link>
      </h1>
      <h1>
        <Link href={"/product/2"}> product2</Link>
      </h1>
      <h1>
        <Link href={"/product/3"} replace>
          product3
        </Link>
      </h1>

      <h1>
        <Link href={`/product/${productId}`}> product {productId}</Link>
      </h1>
    </>
  );
};

export default Product;
