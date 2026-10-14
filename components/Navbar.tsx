'use client';

import { Menu } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-30 px-6 sm:px-12 lg:px-20 py-6 flex items-center justify-between">
      <Logo />
      <button
        onClick={onOpenMenu}
        aria-label="Open Navigation Menu"
        className="text-[#1E382B] hover:text-[#B88E4B] transition p-2 rounded-full focus:outline-none cursor-pointer"
      >
        <Menu size={32} strokeWidth={2.2} />
      </button>
    </header>
  );
}