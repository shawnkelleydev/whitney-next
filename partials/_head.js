import Head from 'next/head'

import { meta } from 'constants/data'

export default function _head() {
  return (
    <Head>
      <title>{meta.TITLE}</title>
      <meta name='description' content={meta.DESCRIPTION} />
      <meta name='keywords' content={meta.KEYWORDS} />
      {/* TODO: Add custom favicon to public */}
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  )
}
