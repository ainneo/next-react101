//you can use globals styles in this file to set all your styles
import "../styles/globals.css";
import Layout from "../components/Layout";

//this file is the container for all your page components
//<Component/> containes all your pages
//here you can create a layout if you want and wrap your container
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

//***** Notes:
//The Component prop is the active page, so whenever you navigate between routes
//Component will change to the new page. Therefore, any props you send to
//Component will be received by the page.
