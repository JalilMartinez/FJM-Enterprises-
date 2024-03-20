import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import AboutUsComponent from "./components/principalComponents/AboutUsComponent/AboutUsComponent.tsx";
import LoginComponent from "./components/principalComponents/LoginComponent/LoginComponent.tsx";
import NewsComponent from "./components/principalComponents/NewsComponent/NewsComponent.tsx";
import FirstPageComponent from "./components/principalComponents/FirstPageComponent/FirstPageComponent.tsx";


export const router = createBrowserRouter([
    {
      path:'/',
      element: <App />,
      children: [
        {
          path:'/',
          element: <FirstPageComponent/>
        },
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