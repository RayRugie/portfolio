import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';


function App() {
  return (
    <div className="w-[1080px] m-auto">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
