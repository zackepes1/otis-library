import Image from 'next/image';
import React from 'react';

interface ImageURL {
  thumbnail: string;
  exhibitImage: string;
}

interface ShoeCardProps {
  imgURL: ImageURL;
  changeExhibitImage: (img: string) => void;
  exhibitImg: string;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ imgURL, changeExhibitImage, exhibitImg }) => {
  const handleClick = () => {
    if (exhibitImg !== imgURL.exhibitImage) {
      changeExhibitImage(imgURL.exhibitImage);
    }
  };

  return (
    <div
      className={`border-2 mt-5 rounded-xl ${
        exhibitImg === imgURL.exhibitImage ? 'border-blue-500' : 'border-transparent'
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image src={imgURL.thumbnail} alt="exhibit image" width={127} height={103} className="object-contain rounded-xl" />
      </div>
    </div>
  );
};

export default ShoeCard;