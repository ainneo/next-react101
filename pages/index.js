//**** HOME PAGE */
import Head from "next/head";
import ArticlesList from "../components/ArticlesList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      {/* SEO META DATA */}
      <Head>
        <title>Ainnes Next Project </title>
        <meta name="keywords" content="web development" programming />
      </Head>
      <ArticlesList articles={articles} />
    </div>
  );
}

// 3 types of api calls: props, serverside props, paths
// her we willuse props
//API call passing data into the ArticlesList component
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
