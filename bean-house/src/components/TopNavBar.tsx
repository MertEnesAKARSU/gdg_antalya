import React from 'react';

export default function TopNavBar() {
  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md fixed top-0 w-full z-50 bg-transparent flat no shadows">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
          Bean House Coffee
        </div>
        <nav className="hidden md:flex gap-gutter">
          <a
            className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 font-headline-sm text-headline-sm ease-in-out duration-500 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
            href="#our-story"
          >
            Our Story
          </a>
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-headline-sm text-headline-sm ease-in-out duration-500 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
            href="#menu"
          >
            Menu
          </a>
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-headline-sm text-headline-sm ease-in-out duration-500 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
            href="#hours"
          >
            Hours
          </a>
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-headline-sm text-headline-sm ease-in-out duration-500 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
            href="#reviews"
          >
            Reviews
          </a>
        </nav>
        <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-DEFAULT hover:bg-primary/90 transition-colors hidden md:block uppercase min-h-[48px]">
          Order Now
        </button>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}
