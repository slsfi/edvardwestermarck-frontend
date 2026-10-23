import type { CollectionCovers } from '@models/collection.models';

// Topelius sample: backend cover metadata retrieved on 2026-10-22.
// Replace with the edition's collection IDs, localized paths, and alt texts.
// Paths refer to full-size images in public/; the grid uses *_thumb images.
export const collectionCovers: CollectionCovers = {
  1: {
    sv: {
      imageURL: 'assets/images/covers/cover_artiklar.jpg',
      imageAltText: 'Omslag till Artiklar'
    },
    en: {
      imageURL: 'assets/images/covers/cover_artiklar.jpg',
      imageAltText: 'Cover image for Articles'
    }
  },
  2: {
    sv: {
      imageURL: 'assets/images/covers/cover_korrespondens_lagerborg.jpg',
      imageAltText: 'Omslag till Korrespondens med Lagerborg'
    },
    en: {
      imageURL: 'assets/images/covers/cover_korrespondens_lagerborg.jpg',
      imageAltText: 'Cover image for Correspondence with Lagerborg'
    }
  },
  3: {
    sv: {
      imageURL: 'assets/images/covers/cover_sex_ar_i_marocko.jpg',
      imageAltText: 'Omslag till Sex år i Marocko'
    },
    en: {
      imageURL: 'assets/images/covers/cover_sex_ar_i_marocko.jpg',
      imageAltText: 'Cover image for Sex år i Marocko'
    }
  },
  4: {
    sv: {
      imageURL: 'assets/images/covers/cover_six_years_in_morocco.jpg',
      imageAltText: 'Omslag till Six Years in Morocco'
    },
    en: {
      imageURL: 'assets/images/covers/cover_six_years_in_morocco.jpg',
      imageAltText: 'Cover image for Six Years in Morocco'
    }
  }
};
