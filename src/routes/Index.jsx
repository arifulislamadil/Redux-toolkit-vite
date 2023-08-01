import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import ShowBooks from "../pages/ShowBooks/ShowBooks";
import AddBook from "../pages/AddBook/AddBook";
import UpdateBook from "../pages/UpdateBook/UpdateBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/show-books",
            element:<ShowBooks/>
        },
        {
            path:"/add-book",
            element:<AddBook/>
        },
        {
            path:"/update-book",
            element:<UpdateBook/>
        },
      ]
    },
    
    {
        path: "*",
        element: <Error/>,
        
      },

  ]);

  export default router;


