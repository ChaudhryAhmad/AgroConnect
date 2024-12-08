import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./Layouts/AppLayout"
import Home from "./Pages/General/Home"
import AboutUs from "./Pages/General/AboutUs"
import ContactUs from "./Pages/General/ContactUs"
import Faq from "./Pages/General/Faq"
import Login from "./Pages/General/Login"
import PasswordRecovery from "./Pages/General/PasswordRecovery"
import PrivacyPolicy from "./Pages/General/PrivacyPolicy"
import Signup from "./Pages/General/Signup"
import TermsAndConditions from "./Pages/General/TermsAndConditions"

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/about",
          element:<AboutUs/>
          
        },
        {
            path:"/contact",
            element:<ContactUs/>
        },
        {
          path:"/faq",
          element:<Faq/>
        },
        {
        path : "/Login",
        element:<Login/>,
        },
         {
            path:"passwordRecovery",
            element:<PasswordRecovery/>
         },
        
        {
          path:"/privacypolicy",
          element:<PrivacyPolicy/>       
        },

        {
            path:"/signup",
            element:<Signup/>,
           
        },
        
        {
            path:"/termsandconditions",
            element:<TermsAndConditions/>
        }
      
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

