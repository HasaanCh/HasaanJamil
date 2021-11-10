import Link from 'next/link';
import styles from '../styles/articlecard.module.css';


const ArticleCard = ({article,key}) => {
    return(

        <Link key={key} href="/article/[id]" as={`/article/${article._id}`}>
            <div className={styles.article_card} data-aos="fade-left" data-aos-duration="1000"><a >
            <h3>{article.Title}</h3>
            <p>{article.Desc}</p>
            </a></div>
            
        </Link>
    
    )
}

export default ArticleCard;