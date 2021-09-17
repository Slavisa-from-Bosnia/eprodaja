import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const jssStyle=document.querySelector("#jss-server-side");
    if(jssStyle){
      jssStyle.parentElement.remove(jssStyle);
    }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
