import { LucidePackage2 } from 'lucide-react';
import Link from '../ui/Link';
import vercelLogo from '../../assets/vercel-icon-dark.png';
import gitHubLogo from '../../assets/github-mark.svg';
import vercelTextLogo from '../../assets/vercel-logotype-light.svg';

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4'>
      <Link
        className='flex items-center gap-2 cursor-pointer p-0 text-md'
        to='/'
      >
        <LucidePackage2 />
        <span className='font-semibold'>Acme Store</span>
      </Link>
      <nav className=''>
        <ul className='flex items-center gap-4'>
          <li>
            <Link
              icon={vercelLogo}
              iconWidth={12}
              iconHeight={12}
              className='bg-black text-white'
              to={'/deploy'}
            >
              Deploy
            </Link>
          </li>
          <li>
            <Link
              icon={gitHubLogo}
              iconWidth={20}
              iconHeight={20}
              className='bg-gray-100/80 text-black hover:bg-gray-100/70'
              to={'/github'}
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              icon={vercelTextLogo}
              iconHeight={24}
              className='!p-0 hover:bg-white'
              to={'/vercel'}
            ></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
