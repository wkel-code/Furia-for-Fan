
import React from 'react';

interface FuriaLogoProps {
  className?: string;
}

const FuriaLogo: React.FC<FuriaLogoProps> = ({ className = "h-20 w-auto" }) => {
  return (
    <img 
      src="/lovable-uploads/943bef9b-a0e4-43be-b68f-f6a3b0f02716.png" 
      alt="FURIA Logo" 
      className={className}
    />
  );
};

export default FuriaLogo;
