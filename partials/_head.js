import Head from 'next/head'

import meta from 'constants/meta'

export default function _head() {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta
        name='description'
        content={meta.description}
      />
      <meta
        name='keywords'
        content={meta.keywords}
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
