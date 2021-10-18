import styles from '../../../styles/singlearticle.module.css'

const article = ({article}) => {
    return(
        <div className={styles.article_wrapper}>
            <div className={styles.article_title}>
            {article.title}
            </div>

            <div className={styles.article_body}>
            {article.body}
            </div>

        </div>
    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();
    return{
        props:{
            article
        }
    }
    
}


export default article;