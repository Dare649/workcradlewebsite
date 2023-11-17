import Speakers from "./Speakers";

const Event = () => {
  return (
    <section id='event' className='pb-32'>
        <h1 className="text-center capitalize font-bold text-4xl">event</h1>
        <div className='mt-20 lg:px-8 sm:px-0'>
            <p className='aboutTheEvent'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, aut, exercitationem debitis autem blanditiis velit beatae nostrum harum fugiat nobis aspernatur, optio eos nesciunt fugit soluta laborum placeat non pariatur facilis. Totam nulla doloribus odit corrupti saepe neque. Ducimus sequi eos provident accusantium voluptate odit ab rerum! Omnis, veritatis eius?</p>
            <div className='mt-10 flex items-center justify-center'>
            <button className='border border-black text-white px-8 py-3 bg-gray-300 hover:bg-transparent hover:text-black font-medium capitalize '>register now</button>
            </div>
            <Speakers/>
        </div>
    </section>
  )
}

export default Event
