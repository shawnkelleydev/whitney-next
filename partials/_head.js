import Head from 'next/head'

import meta from 'constants/meta'

export default function _head() {
  return (
    <Head>
      <title>{meta.TITLE}</title>
      <meta
        name='description'
        content={meta.DESCRIPTION}
      />
      <meta
        name='keywords'
        content={meta.KEYWORDS}
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
