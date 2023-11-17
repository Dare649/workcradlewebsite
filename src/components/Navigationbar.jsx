import { navLinks } from "../data/dummy";
import { Link } from "react-scroll";

const Navigationbar = () => {
  return (
    <section className='navBar'>
        <div className="flex flex-row items-center justify-between px-4 py-8">
          <div className="logo text-4xl text-white">WorkCradle</div>
          <div className="links">
            <ul className="flex items-center text-white">
              {
                navLinks.map((link, index) => (
                  <Link key={index} spy={true} to={link.path} smooth={true}
                    className="text-lg capitalize font-medium cursor-pointer "
                  >
                    <li className="hover:border hover:border-white px-4 py-2">{link.title}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Navigationbar
