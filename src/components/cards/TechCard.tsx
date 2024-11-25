import React from "react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-default justify-center">
      <figure>{icon}</figure>
      <figcaption>{title}</figcaption>
    </div>
  );
};

export default TechCard;
