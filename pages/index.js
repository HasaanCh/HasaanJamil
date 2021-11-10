import Head from 'next/head';
import ArticlesList from '../components/articleList.component'
import Header from '../components/header.component'
import styles from '../styles/indexhome.module.css';

export default function Home({articles}) {
  console.log(articles.data);
  return (
   <>
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Header />
    
    <div className="default-container">
<h2 className={"fancyheadings"} data-aos="fade-down" >Our Projects</h2>
      <ArticlesList articles={articles.data}/>
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
  const res = await fetch('http://127.0.0.1:8447/api');
  const articles = await res.json();


  return {
    props:
    {
      articles
    }
  }
}
