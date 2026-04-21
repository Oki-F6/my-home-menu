import Image from "next/image";

export const Header = () => {
  return (
    <header className="hero-header">
      <h1>Что приготовим?</h1>
      <Image src="images/apple.png" alt="Apple" width="42" height="42" />
    </header>
  );
};
