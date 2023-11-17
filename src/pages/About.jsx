import aboutImg from "../assets/images/wcaboutImg.jpg";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id='about' className="py-32">
        <h1 className="text-center capitalize font-bold text-4xl">about workcradele</h1>
        <div className="flex lg:flex-row sm:flex-col gap-8 mt-20 lg:px-8 sm:px-0">
            <img src={aboutImg} alt="" className="lg:w-[50%] sm:w-full"/>
            <p className="flex items-center justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint molestias est quasi modi dolore veritatis ratione rerum dolor magni? Tenetur qui dolor molestias numquam hic obcaecati corrupti eaque inventore, quia ipsum doloremque aut explicabo at distinctio sapiente deleniti aspernatur!</p>
        </div>
        <Link to="home" spy={true} smooth={true} className="top-3/4 left-0 fixed cursor-pointer">
          <FaArrowUp size={30} />
        </Link>
    </section>
  )
}

export default About
