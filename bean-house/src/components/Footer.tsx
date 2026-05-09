import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high dark:bg-inverse-surface w-full py-section-gap flat no shadows">
      <div className="flex flex-col items-center gap-8 px-margin-desktop text-center max-w-container-max-width mx-auto">
        <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">
          Bean House Coffee
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-body-sm text-body-sm ease-in-out duration-300 hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-body-sm text-body-sm ease-in-out duration-300 hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-body-sm text-body-sm ease-in-out duration-300 hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4"
            href="#"
          >
            Contact Us
          </a>
        </div>
        <div className="flex gap-4">
          <a className="text-outline hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="share">
              share
            </span>
          </a>
          <a className="text-outline hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="mail">
              mail
            </span>
          </a>
        </div>
        <div className="text-primary dark:text-primary-fixed-dim font-body-sm text-body-sm mt-4">
          © 2024 Bean House Coffee. Crafted for the slow pour.
        </div>
      </div>
    </footer>
  );
}
