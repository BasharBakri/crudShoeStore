import './App.css';
import AddShoe from './AddShoe';
import AllShoes from './AllShoes';
import Home from './Home';
import Root from './Root';
import Error from './Error';
import ShoeDetail from './ShoeDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditShoe from './EditShoe';
import { getAllShoes } from './api';
import { getSingleShoe } from './apiEach';
import AllShoesRoot from './AllShoesRoot';
import { sendShoe } from './apiAdd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/a',
        element: <AllShoesRoot />,
        children: [
          {
            path: '/a/allshoes/',
            element: <AllShoes />,
            loader: getAllShoes
          },
          {
            path: '/a/allshoes/addshoe',
            element: <AddShoe />,
            action: sendShoe
          },
          {
            path: '/a/allshoes/:shoeId',
            element: <ShoeDetail />,
            loader: getSingleShoe
          },
          {
            path: '/a/allshoes/:shoeId/edit',
            element: <EditShoe />,
            loader: getSingleShoe
          }

        ]
      },


    ],
  },
]);


function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
}

export default App;
