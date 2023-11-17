import '../App.css';
import Navigationbar from "../components/Navigationbar";

const Home = () => {
  return (
    <main className='top w-screen' id='home'>
      <Navigationbar/>
      <div className='flex flex-col items-center justify-center py-60 text-center w-full'>
        <h1 className='font-bold text-2xl text-white pb-5'>Lorem ipsum dolor sit amet.</h1>
        <h1 className='font-bold text-4xl text-white pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, maiores..</h1>
        <button className='border border-white px-8 py-3 bg-white hover:bg-transparent hover:text-white font-medium capitalize focus:bg-transparent focus:text-white'>register now</button>
      </div>
    </main>
  )
}

export default Home
