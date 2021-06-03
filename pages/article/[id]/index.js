//nested routes
// import { server } from "../../../config";
import Link from "next/link";
// import Meta from "../../../components/Meta";

const article = ({ article }) => {
  return (
    <>
      {/* <Meta title={article.title} description={article.excerpt} /> */}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// //use both Props & Paths
// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
// //statically generate all the paths with data
// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// 2 types of Next Api call for nested routes: Props & Paths
//passed props
export const getStaticProps = async (data) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${data.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
//creates statics routes
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
