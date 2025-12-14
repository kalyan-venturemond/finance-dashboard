import React from "react";
import justboilLogoPath from "./logoPath";

type Props = {
  className?: string;
};

export default function VentureMondLogo({ className = "" }: Props) {
  return (
    <img
      src="/logo.png"
      alt="VentureMond Logo"
      className={className}
      width={250}
      height={100}
    />
  );
}
