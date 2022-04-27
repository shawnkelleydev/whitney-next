import Head from 'next/head'

export default function _head() {
  return (
    <Head>
      {/* TODO: Add title / description */}
      <title>App Title</title>
      <meta
        name='description'
        content='App description'
      />
      {/* TODO: Add favicon to public */}
      <link
        rel='icon'
        href='/favicon.ico'
      />
      {/* TODO: Add fonts */}
    </Head>
  )
}
