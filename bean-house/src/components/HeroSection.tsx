import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[819px] flex items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop"
      id="our-story"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero Background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtXKDgaN_0Mn96y75L8e_ihuc2JsT8R3Nih-axKg9UkAHHpyQf_N8K2C6ydI765slLGRZqmPIDYCGWBbWVW5lz3T3LVgxzZuv7IZplyrqO-z2M7fb0XBJqV5zHIDG23oixkLZ6zm6JqfricjukYkSlynlM9b6GThK_BiEIL9x8ov4LWXI5EJiM4GEwTOonrka7mEW7yoz0Mf63JtbzasHbTTZkFpErM2cHbV_9trFleJ2-i2Hq2tOkVYstWaMTI7g7Gpv2yPsOyS8"
        />
        <div className="absolute inset-0 bg-inverse-surface/40"></div>
      </div>
      <div className="relative z-10 max-w-container-max-width mx-auto text-center text-on-primary">
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6">
          Yavaş Döküm Sanatı
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-8 text-surface-container-high">
          Her bir fincan, özenle seçilmiş çekirdekler ve ustalıkla demlenmiş bir hikaye barındırır. Bean House Coffee'de aceleye yer yok; sadece kaliteli kahvenin tadını çıkarın.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-surface text-primary font-label-md text-label-md px-8 py-4 rounded-DEFAULT hover:bg-surface-container transition-colors uppercase tracking-wider min-h-[48px]">
            Menüyü Keşfet
          </button>
        </div>
      </div>
    </section>
  );
}
