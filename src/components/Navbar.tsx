import { appleImg, bagImg, searchImg } from '../utils';

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={appleImg} alt='Apple logo' width={14} height={18} />
        <div>
          {['iPhones', 'MacBooks', 'iPads'].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>

        <div>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
