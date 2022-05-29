import Head from 'next/head'

import { meta } from 'utils/constants/data'

export default function _head() {
  return (
    <Head>
      <title>{meta.TITLE}</title>
      <meta name='description' content={meta.DESCRIPTION} />
      <meta name='keywords' content={meta.KEYWORDS} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
