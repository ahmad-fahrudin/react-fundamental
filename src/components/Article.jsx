import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew ? <span style={{ color: "blue" }}> - New!</span> : "";
};

const NewArticle = () => {
  return <span style={{ color: "blue" }}> - New!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>
        {props.title} <ArticleStatus isNew={props.isNew} />
      </h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")}{" "}
        {props.isNew && <NewArticle />}
      </small>
      <div>
        <small>Ditulis oleh Programmer {user.name}</small>
      </div>
    </>
  );
}

export default Article;
