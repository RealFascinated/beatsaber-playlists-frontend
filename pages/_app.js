import { Container, createTheme, NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import Navbar from '../compontnts/NavBar';
import '../styles/globals.css'

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: '$green200',
      primary: '#4ADE7B',
      primaryDark: '$green600',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      myColor: '#ff4ecd'
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }) {
  // todo: Validate token and logout if expired

  return (
    <NextUIProvider theme={theme}>
      <Head>
        <title>BeatSaber Playlists</title>
        <meta name="twitter:title"      content='BeatSaber Playlists' />
        <meta property="og:site_name"   content="BeatSaber Playlists" key="title" />
        <meta property="og:description" content="Create, upload and share BeatSaber playlists" key="description" />
        <meta property="og:url"         content="https://beatsaberplaylists.net" key="title" />
      </Head>

      <Navbar></Navbar>
      <Container>
        <div style={{ height: "1em" }}></div>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;