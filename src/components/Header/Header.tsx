import { LucidePackage2 } from 'lucide-react';
import Button from '../ui/button';
import vercelLogo from '../../assets/vercel-icon-dark.png';
import gitHubLogo from '../../assets/github-mark.svg';
import vercelTextLogo from '../../assets/vercel-logotype-light.svg';

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-2'>
        <LucidePackage2 />
        <span className='font-semibold'>Acme Store</span>
      </div>
      <nav className=''>
        <ul className='flex items-center gap-4'>
          <li>
            <Button
              icon={vercelLogo}
              iconWidth={16}
              iconHeight={16}
              className='bg-black text-white'
            >
              Deploy
            </Button>
          </li>
          <li>
            <Button
              icon={gitHubLogo}
              iconWidth={20}
              iconHeight={20}
              className='bg-gray-100/80 text-black'
            >
              GitHub
            </Button>
          </li>
          <li>
            <Button
              icon={vercelTextLogo}
              iconHeight={24}
              className='!p-0'
            ></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
