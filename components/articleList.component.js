import style from '../styles/articles.module.css';
import ArticleCard from './articlecard.component';

const ArticlesList = ({articles}) => {
    return (
        <div className={style.article_section}>

        {articles.map(article =>
            <ArticleCard  key={article._id} article={article}/>   
           )}
           
        </div>
    )
}

export default ArticlesList