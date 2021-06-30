import styles from '../styles/Layout.module.css'
import Nav from "../components/Nav"
import Header from "../components/Header";
import Meta from "./Meta"
const Layout = ({children}) => {
 return (
  <>
   <Meta/>
   <Nav/>
  <div className={styles.container}>
   <main className={styles.main}>

    </main>
    <Header/>
   {children}
   </div>
   </>
 )
}

export default Layout
