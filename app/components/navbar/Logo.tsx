'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
//rentify_logo
const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={120}
      width={120}
      src="/images/rentify_logo.jpg"
    />
  );
};

export default Logo;
