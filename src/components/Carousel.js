import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: 'https://picsum.photos/600/300?random=1',
      label:
        'The Challenge of Cyber Incident Response - Beat the Clock, with Accuracy',
      secondLabel: 'by Joann Shields in Articles',
    },
    {
      src: 'https://picsum.photos/600/300?random=2',
      label:
        'Tame the Third-Party Subpoena Monster with a Sound Compliance Process',
      secondLabel: 'by Robert Daniel and Mark Grant in Articles',
    },
    {
      src: 'https://picsum.photos/600/300?random=3',
      label:
        'Business of Law Podcast: Integreon and Microsoft Legal Operations Discuss a Decade of Partnership',
      secondLabel: 'by Integreon in Articles',
    },
    {
      src: 'https://picsum.photos/600/300?random=4',
      label: 'Pensar Report: The Future of Legal Services',
      secondLabel: 'by Ben Edwards and Jane Mayer in Press Releases',
    },
    {
      src: 'https://picsum.photos/600/300?random=5',
      label:
        'Tackling Post-Brexit Regulatory Challenges as UK and EU Oaths Diverge',
      secondLabel: 'by Dean Nasser n Articles',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="container relative w-full mx-auto p-6">
      <div className="shadow-lg rounded flex overflow-hidden h-auto">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <div key={index} className="w-1/5 flex flex-col items-center p-2">
            <div>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2 text-left text-base font-extrabold text-gray-800 bg-white p-2 h-20">
              <span>{image.label}</span>
            </div>
            <div className="w-full mt-1 text-left text-base text-gray-600 font-semibold bg-white p-4 h-16">
              <span>{image.secondLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
