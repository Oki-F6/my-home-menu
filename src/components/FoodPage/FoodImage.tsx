import Image from "next/image";

interface FoodImageProps {
  photo: string;
  time: string;
  price: number;
  title: string;
}

export const FoodImage = ({ photo, title, time, price }: FoodImageProps) => {
  return (
    <div className="recipe-image-wrapper">
      <img loading="lazy" src={photo} alt={title} className="recipe-main-image" />
      <div className="recipe-tags">
        <div className="tag">
          <Image
            src="images/icons/clock.svg"
            alt="clock"
            className="tag-icon"
            width="20"
            height="20"
          />
          <span style={{ fontWeight: 400 }}>{time}</span>
        </div>
        <div className="tag">
          <Image
            src="images/icons/rub.svg"
            alt="ruble"
            className="tag-icon"
            width="20"
            height="20"
          />
          <span style={{ fontWeight: 400 }}>{price}</span>
        </div>
      </div>
    </div>
  );
};
