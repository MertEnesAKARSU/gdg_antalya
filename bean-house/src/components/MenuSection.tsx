import React from 'react';

export default function MenuSection() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto"
      id="menu"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Öne Çıkan Lezzetler
        </h2>
        <div className="w-12 h-1 bg-outline-variant mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Card */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient relative group">
          <div className="h-[400px] w-full overflow-hidden">
            <img
              alt="Espresso"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwMYI4zs92QW-FVi_PtQUr68Pfc0cuJaa8x-7CQLrWmUl4k4Dc_DXjbj_nmeeRARit2dIrY1KOsDt0Qei3dlEzIi5MjzSvs_sO4UBxkNC7KzKNJyvL_xIa98cVO9ePQ-pNdluJ6JTA1l6Uvc9s4kGq984iOdQJMnd02U5_wNk4xEEXPL7j0EjC44_S2rnIUtDNZaEjXFmkydwtiSWH67Q1-eI8ATmmF1ceLkmqgnKNY56noXOVtP-6HtyxiwjoKg0Sdtol169z3qU"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-label-md px-3 py-1 rounded-full mb-3 w-max uppercase">
              Özel Harman
            </span>
            <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
              Signature Espresso
            </h3>
            <p className="font-body-md text-body-md text-surface-container-low mb-4">
              Yoğun gövdeli, karamel ve bitter çikolata notaları barındıran imza espresso harmanımız.
            </p>
            <p className="font-headline-sm text-headline-sm text-surface-container-lowest">
              85 TL
            </p>
          </div>
        </div>
        {/* Side Cards */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="flex-1 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient p-6 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md px-3 py-1 rounded-full mb-4 uppercase">
                Soğuk Demleme
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Cold Brew
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                18 saatlik yavaş demleme süreciyle elde edilen, asiditesi düşük, yumuşak içimli soğuk kahve.
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center border-t border-surface-variant pt-4">
              <p className="font-headline-sm text-headline-sm text-primary">
                110 TL
              </p>
              <button className="text-primary hover:text-surface-tint transition-colors">
                <span className="material-symbols-outlined" data-icon="add_circle">
                  add_circle
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1 bg-surface-container-highest rounded-xl overflow-hidden p-6 flex flex-col justify-between relative">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span
                className="material-symbols-outlined text-[120px]"
                data-icon="local_cafe"
              >
                local_cafe
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                V60 Pour Over
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Etiyopya Yirgacheffe çekirdekleriyle, çiçeksi ve meyvemsi notaların ön planda olduğu filtre kahve deneyimi.
              </p>
            </div>
            <div className="mt-4 relative z-10">
              <p className="font-headline-sm text-headline-sm text-primary">
                95 TL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
