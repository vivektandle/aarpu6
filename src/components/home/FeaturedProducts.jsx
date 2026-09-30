import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoGallery } from '@/components/ui/gallery';
import { PRODUCTS } from '../../data/products';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  // Create photo items mapped to Aarpu's architectural minimal systems
  // Exactly 5 images starting from left side with minimal aluminium door & window systems
  const productPhotos = [
    {
      id: PRODUCTS[0]?.id || 'p1',
      order: 0,
      direction: 'left',
      src: PRODUCTS[0]?.mainImage || '/images/Final_Images/image1.jpeg',
    },
    {
      id: PRODUCTS[1]?.id || 'p2',
      order: 1,
      direction: 'right',
      src: PRODUCTS[1]?.mainImage || '/images/Final_Images/image10.jpeg',
    },
    {
      id: PRODUCTS[2]?.id || 'p3',
      order: 2,
      direction: 'left',
      src: PRODUCTS[2]?.mainImage || '/images/Final_Images/image13.jpeg',
    },
    {
      id: PRODUCTS[3]?.id || 'p4',
      order: 3,
      direction: 'right',
      src: PRODUCTS[3]?.mainImage || '/images/Final_Images/image4.jpeg',
    },
    {
      id: PRODUCTS[4]?.id || 'p5',
      order: 4,
      direction: 'left',
      src: PRODUCTS[4]?.mainImage || '/images/Final_Images/image15.jpeg',
    },
  ];

  return (
    <section className="w-full py-4 sm:py-5 md:py-6 bg-white border-y border-[#E2E2E2] overflow-hidden relative">
      <div className="w-full">
        <PhotoGallery
          animationDelay={0.2}
          title="Explore Our Products"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight"
          buttonText="See More Products"
          onButtonClick={() => navigate('/products')}
          photosData={productPhotos}
          photoWidth={280}
          photoHeight={350}
        />
      </div>
    </section>
  );
}
