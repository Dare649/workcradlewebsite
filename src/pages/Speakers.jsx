import men from "../assets/images/wcmen.jpg";

const Speakers = () => {
  return (
    <div className="mt-20">
        <div className="flex lg:flex-row sm:flex-col gap-8">
            <img src={men} alt="" className="lg:w-[50%] sm:w-full"/>
            <p className="flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maxime, est sapiente, dolorum cum accusantium numquam ullam quidem, id iste nam maiores perferendis laborum explicabo quisquam cupiditate adipisci suscipit quo.</p>
        </div>
        <div className="flex lg:flex-row sm:flex-col mt-10 gap-8">
            <p className="flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maxime, est sapiente, dolorum cum accusantium numquam ullam quidem, id iste nam maiores perferendis laborum explicabo quisquam cupiditate adipisci suscipit quo.</p>
            <img src={men} alt="" className="lg:w-[50%] sm:w-full"/>
        </div>
        <div className='mt-12 flex items-center justify-center'>
            <button className='border border-black text-white px-8 py-3 bg-gray-300 hover:bg-transparent hover:text-black font-medium capitalize '>register now</button>
        </div>
    </div>
  )
}

export default Speakers
