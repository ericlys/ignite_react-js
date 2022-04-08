import styles from './styles.module.scss';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla mollitia fugit impedit harum pariatur culpa nostrum inventore voluptates, recusandae illum incidunt rem totam odio hic tempora voluptatibus vero nesciunt!</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla mollitia fugit impedit harum pariatur culpa nostrum inventore voluptates, recusandae illum incidunt rem totam odio hic tempora voluptatibus vero nesciunt!</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla mollitia fugit impedit harum pariatur culpa nostrum inventore voluptates, recusandae illum incidunt rem totam odio hic tempora voluptatibus vero nesciunt!</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient(); 

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post') 
  ],{
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}