'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center h-8 xs:h-9 sm:h-14 md:h-16 cursor-pointer">
      <Image
        src="/navlogo.png"
        alt="PranaYoga"
        width={180}
        height={60}
        priority
        className="h-8 xs:h-9 sm:h-14 md:h-16 w-auto object-contain"
      />
    </Link>
  );
}

