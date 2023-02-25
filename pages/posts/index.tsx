import { post } from "models/post";
import Link from "next/link";
const PostsList: React.FC<{ posts: Array<post> }> = ({ posts }) => {
  return (
    <>
      <h1>Posts List</h1>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h3>
                {post.id}-{post.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

export default PostsList;
