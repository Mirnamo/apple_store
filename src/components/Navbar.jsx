import { appleImg, bagImg, searchImg } from '../utils';
import {navLists} from '../constants/index';

const Navbar = () => {
  return (
    <header className="w-full py-3 sm:px-5 flex justify-between items-center bg-zinc">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} width={15} height={10}/>
      <div className="flex flex-1 justify-center max-lg:hidden" >
        {navLists.map((nav)=>(
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                {nav}
            </div>
        ))}
      </div>
      <div className="flex items-baseline gap-5 max-lg:justify-end max-lg:flex-1">
        <img src={searchImg} alt="search" width={15} height={10}/>
        <img src={bagImg} alt="bag" width={15} height={10}/>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
