import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import FooterBar from '../Components/Common/Footer/FooterBar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <FooterBar/>
    <Footer/>
    </>
  )
}

export default AppLayout