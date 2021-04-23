import React from "react";

interface Props {
  src: string;
  size: "large" | "small";
  alt?: string;
}

export const Avatar: React.FC<Props> = ({ src, size, alt }) => {
  return (
    <div
      className={`flex overflow-hidden rounded-full ${
        size === "large" ? "w-12 h-12" : "w-6 h-6"
      }`}
    >
      <img className="w-full" src={src} alt={alt ? alt : ""} />
    </div>
  );
};
