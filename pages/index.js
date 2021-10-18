import Head from 'next/head';
import ArticlesList from '../components/articleList.component'
import Header from '../components/header.component'
import styles from '../styles/indexhome.module.css';

export default function Home({articles}) {
  return (
   <>
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Header />
      
    <div className={styles.main_body}>
      <ArticlesList articles={articles} />
    </div>




    <style global jsx>
      {`
        #header1
        {
          position: absolute;
          top: 0px;
          z-index: 999;
          background-color:transparent;
        }`
      }
    </style>

     

   </>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props:
    {
      articles
    }
  }
}
