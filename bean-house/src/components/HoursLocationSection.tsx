import React from 'react';

export default function HoursLocationSection() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container"
      id="hours"
    >
      <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Ziyaret Saatleri
          </h2>
          <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
            <li className="flex justify-between border-b border-surface-variant pb-2">
              <span className="">Pazartesi - Cuma</span>
              <span className="font-medium text-primary">07:00 - 22:00</span>
            </li>
            <li className="flex justify-between border-b border-surface-variant pb-2">
              <span className="">Cumartesi</span>
              <span className="font-medium text-primary">08:00 - 23:00</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="">Pazar</span>
              <span className="font-medium text-primary">09:00 - 21:00</span>
            </li>
          </ul>
          <div className="mt-12">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
              Adres
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Moda Caddesi No: 42<br />
              Kadıköy, İstanbul
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative">
          <img
            alt="Map Location"
            className="w-full h-full object-cover opacity-80"
            data-location="Istanbul"
            src="https://www.donanimhaber.com/cache-v2/?t=20260121131651&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/156504/telefondan-konum-nasil-atilir156504_4.jpg"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-surface/90 backdrop-blur px-6 py-3 rounded-full shadow-ambient flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="location_on">
                location_on
              </span>
              <span className="font-label-md text-label-md text-primary uppercase">
                Buradayız
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
