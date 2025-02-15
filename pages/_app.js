import GlobalStyle from "../src/components/theme/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      Teste de componente middleware
      <Component {...pageProps} />
    </>
  )
}


export default MyApp