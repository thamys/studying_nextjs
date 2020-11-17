import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

function SWAPI({ allSWPeople }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>I am a Web Designer and Front End Developer.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allSWPeople.map(({ name, gender, url }) => (
              <li className={utilStyles.listItem} key={url}>
                {name}
                <br />
                {gender}
                <br />
                <Link href={url}>url</Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://swapi.dev/api/people/')
  const data = await res.json()
  return {
    props: {
      allSWPeople: data.results
    }
  }
}

export default SWAPI