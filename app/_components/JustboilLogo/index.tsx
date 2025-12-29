import React from "react";
import justboilLogoPath from "./logoPath";

type Props = {
  className?: string;
};

export default function FinVertexLogo({ className = "" }: Props) {
  return (
    <img
      src="/logo.png"
      alt="FinVertex Systems Logo"
      className={className}
      width={250}
      height={100}
    />
  );
}
