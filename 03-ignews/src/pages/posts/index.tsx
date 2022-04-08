import Head from 'next/head';
import styles from './styles.module.scss';

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