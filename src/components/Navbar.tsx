import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

export default function Navbar() {
  return (
    <header className='flex w-full py-5 sm:px-10 px-5 justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt='Apple logo' width={14} height={18} />
        {/* navLists = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Support']; */}
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='px-5 text-sm cursor-pointer text-gray-200 hover:text-white transition-all'
            >
              {nav}
            </div>
          ))}
        </div>
        {/* icons */}
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
