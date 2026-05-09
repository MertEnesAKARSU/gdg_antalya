import React from 'react';

export default function ReviewsSection() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto"
      id="reviews"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Kahve Severlerin Yorumları
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border border-surface-variant">
          <div className="flex gap-1 text-on-tertiary-container mb-4">
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
            "Moda'nın en iyi V60 demlemesini burada içtim. Atmosfer sakin, müzikler harika. Tam bir pazar sabahı mekanı."
          </p>
          <p className="font-label-md text-label-md text-primary uppercase tracking-wider">
            - Zeynep A.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border border-surface-variant">
          <div className="flex gap-1 text-on-tertiary-container mb-4">
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
            "Baristalar kahve konusunda çok bilgili ve ilgili. Yeni tatlar denemek isteyenler için kesinlikle tavsiye ederim."
          </p>
          <p className="font-label-md text-label-md text-primary uppercase tracking-wider">
            - Can K.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border border-surface-variant">
          <div className="flex gap-1 text-on-tertiary-container mb-4">
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="star_half"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star_half
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
            "Cold brew yaz aylarının vazgeçilmezi oldu benim için. Şişeleme tasarımları da çok şık."
          </p>
          <p className="font-label-md text-label-md text-primary uppercase tracking-wider">
            - Elif B.
          </p>
        </div>
      </div>
    </section>
  );
}
