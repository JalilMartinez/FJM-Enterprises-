import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import AboutUsComponent from "./principalComponents/AboutUsComponent/AboutUsComponent.tsx";
import LoginComponent from "./principalComponents/LoginComponent/LoginComponent.tsx";
import NewsComponent from "./principalComponents/NewsComponent/NewsComponent.tsx";


export const router = createBrowserRouter([
    {
      path:'/',
      element: <App />,
      children: [
        {
          path:'/SobreNosotros',
          element: <AboutUsComponent/>
        },
        {
          path:'/Noticias',
          element: <NewsComponent/>
        },
        {
          path:'/IniciarSesion',
          element: <LoginComponent/>
        }
      
        
      ]
    }
  ])