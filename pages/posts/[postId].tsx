import { post } from "models/post";

const PostDetails: React.FC<{ post: post}> = ({ post }) => {
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

    return {
        paths : [
            {
                params : {postId : '1'}
            },
            {
                params : {postId : '2'}
            }, {
                params : {postId : '3'}
            },
            
        ],
        fallback : false

    }
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export default PostDetails;
