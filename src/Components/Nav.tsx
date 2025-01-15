import { headerLogo} from '../nike_landing_assets/assets/images';
// @ts-ignore
import { hamburger} from '../nike_landing_assets/assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='px-10 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            
            <a href="/">
            <img src={headerLogo} alt="Logo" width={140} height={29}/>
            </a>

            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>

            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                    className='font-montserrat errat leading-normal text-lg text-slate-gray'>
                        {item.label}
                    </a>
                </li>
            ))}

            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </div>
        </nav>

    </header>
  )
}

export default Nav