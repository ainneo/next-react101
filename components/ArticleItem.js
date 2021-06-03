import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

//The Link is linked to the article/[id] folder in pages
//so when you click the link, it will excute the 2 fetch calls:
//1 to pass down the props and 2 to create a path & display the page
const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
