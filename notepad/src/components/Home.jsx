import  {  useState } from 'react';
import Sidebar from './Sidebar';
import Head from './Head';
import Preloader from './Preloader';

function Home() {
  const[show,setShow] = useState(false)

  return (
    <>
    {show ? <div className='flex'>
      <Sidebar />
          <div className='w-[80%] h-[100]%'>
            <Head />
          </div>
      </div>
          : <Preloader
          setShow={setShow}
          /> }
    </>
  );
}

export default Home;
