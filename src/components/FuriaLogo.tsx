
import React from 'react';

interface FuriaLogoProps {
  className?: string;
}

const FuriaLogo: React.FC<FuriaLogoProps> = ({ className = "h-20 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 168 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.071 0.5H0.5V47.5H33.071L47.5 24L33.071 0.5Z"
        fill="#000000"
        stroke="#FF5500"
      />
      <path
        d="M101.619 0.5H67.381L54 24L67.381 47.5H101.619L115 24L101.619 0.5Z"
        fill="#000000"
        stroke="#FF5500"
      />
      <path
        d="M167.5 0.5H134.929L120.5 24L134.929 47.5H167.5V0.5Z"
        fill="#000000"
        stroke="#FF5500"
      />
      <path
        d="M15.987 12.5H27.987V17.5H21.987V20.5H26.987V25.5H21.987V35.5H15.987V12.5Z"
        fill="#FF5500"
      />
      <path
        d="M72.487 12.5V35.5H79.487V25.5H84.487V35.5H91.487V12.5H84.487V20.5H79.487V12.5H72.487Z"
        fill="#FF5500"
      />
      <path
        d="M148.987 12.5H136.987V35.5H142.987V25.5H147.987V20.5H142.987V17.5H148.987V12.5Z"
        fill="#FF5500"
      />
    </svg>
  );
};

export default FuriaLogo;
