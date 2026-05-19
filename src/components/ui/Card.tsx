import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?: 'white' | 'bg-light';
  imageSrc?: string;
  imageAlt?: string;
}
export function Card({
  bg = 'white',
  imageSrc,
  imageAlt = '',
  className = '',
  children,
  ...props
}: CardProps) {
  const bgColors = {
    white: 'bg-white',
    'bg-light': 'bg-bg-light'
  };
  return (
    <div
      className={`flex flex-col rounded-card shadow-subtle overflow-hidden min-h-[280px] ${bgColors[bg]} ${className}`}
      {...props}>
      
      {imageSrc &&
      <div className="w-full aspect-video">
          <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-none" />
        
        </div>
      }
      <div className="p-6 flex flex-col flex-grow">{children}</div>
    </div>);

}