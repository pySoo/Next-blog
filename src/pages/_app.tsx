import './globals.css';
import { seoConfig } from '@/constants/config';
import { $ } from '@/libs/core';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <div className={$('font-sans')}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
