import '../styles/globals.css'
import '../components/manage/layouts/vertical-layout.css'
import "../styles/libs/font-awesome/css/fontawesome.min.css";
import AuthLayout from '../components/auth/layouts/layout'
import MainLayout from '../components/main/layouts/layout'
import ManageLayout from '../components/manage/layouts/layout'

function MyApp({ Component, pageProps }) {
  // set layout
  const Layout = Component.layout === 'auth' ? AuthLayout : 
  Component.layout === 'manage' ? ManageLayout : MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
