import Link from "next/link";
import { useRouter } from "next/router";
const Home: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing order");
    router.push("/product");
  };
  return (
    <>
      <h1>Home page</h1>
      <Link href="./blog">Blogs</Link>
      <Link href="./product">Products</Link>
      <Link href="./users">Users</Link>
      <Link href="./posts">Posts</Link>


      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
