import styles from '../../../styles/singlearticle.module.css'

const article = ({article}) => {
    console.log(article);
    return(
        <div className={styles.article_wrapper}>
            <div className={styles.article_title}>
            {article.data.Title}
            </div>

            <div className={styles.article_body}>
            {article.data.Desc}
            </div>

        </div>
    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch(`http://127.0.0.1:8447/api/${context.params.id}`)
    const article = await res.json();

    return{
        props:{
            article
        }
    }
    
}


export default article;