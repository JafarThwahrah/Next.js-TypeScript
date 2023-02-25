import { post } from "models/post";
import { useRouter } from "next/router";
const PostDetails: React.FC<{ post: post }> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1>Posts Details</h1>

      <h3>
        {post.id}-{post.title}
      </h3>
      <h3>{post.userId}</h3>
      <h3>{post.body}</h3>
    </>
  );
};

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post: post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });
  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}

export default PostDetails;
