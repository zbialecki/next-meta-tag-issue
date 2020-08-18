import Head from 'next/head'

export default function Home() {
  const title = 'Test Case for Issue #10183'
  const authorNames = ['Alice', 'Bob', 'Carol', 'Dave']

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="citation_title" content={title} />
        {authorNames.map(author => (
          <meta key={author} name="citation_author" content={author} />
        ))}
      </Head>

      <h1>{title}</h1>
      <h3>This page only has 1 meta tag with the name "citation_author" 🤔</h3>
    </div>
  )
}
