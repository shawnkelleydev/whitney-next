import Head from 'next/head'

import metaData from 'constants/meta'

export default function _head() {
  return (
    <Head>
      {/* TODO: Add title / description */}
      <title>App Title</title>
      <meta
        name='description'
        content={metaData.description}
      />
      {/* TODO: Add custom favicon to public */}
      <link
        rel='icon'
        href='/favicon.ico'
      />
      {/* TODO: Add fonts */}
    </Head>
  )
}
