import { Suspense, useState } from 'react'

import Navbar from './component/Navbar'
import Herosection from './component/Herosection'
import Footer from './component/Footer'
import Technologysection from './component/Technologysection'
import type { Datatype } from './Type/Datatype';
import { ToastContainer } from 'react-toastify'

const fetchdata = async ():Promise<[Datatype]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
function App() {
  const [promisedata] = useState(() => fetchdata());

  return (
    <div className='container mx-auto'>
      <Navbar/>
        <Herosection/>
        <Suspense fallback={<p>Loading.....</p>}>
          <Technologysection promisedata = {promisedata}/>
        </Suspense>
        <ToastContainer position="bottom-right" autoClose={3000}/>
        <Footer/>
    </div>
  )
}

export default App
