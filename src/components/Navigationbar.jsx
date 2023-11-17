import { navLinks } from "../data/dummy";
import { Link } from "react-scroll";
import { BiMenu} from 'react-icons/bi';
import { useState } from "react";

const Navigationbar = () => {
  const [visible, setVisible] = useState();
  return (
    <section className='navBar'>
        <div className="w-full flex items-center justify-between lg:px-4 lg:py-8 sm:px-2 sm:py-4">
          <div className="logo lg:text-4xl sm:text-2xl text-white font-bold">WorkCradle</div>
          <div className="links">
            <div>
              <BiMenu 
                onClick={() => setVisible((prev)=> !prev)}
                className="sm:visible lg:hidden relative font-bold text-white"
                size={30}
              />
            </div>
            {
              !visible ? (
                ""
              ):
              (
                <ul className="flex lg:flex-row sm:flex-col text-white">
              {
                navLinks.map((link, index) => (
                  <Link key={index} spy={true} to={link.path} smooth={true}
                    className="lg:text-lg sm:text-md capitalize font-medium cursor-pointer "
                  >
                    <li className="hover:border hover:border-white px-4 py-2">{link.title}</li>
                  </Link>
                ))
              }
            </ul>
              )
            }
          </div>
        </div>
    </section>
  )
}

export default Navigationbar
