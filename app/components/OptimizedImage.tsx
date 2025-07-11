import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean; // Optional: For above-the-fold images
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur" // Optional: Add a blur placeholder
        blurDataURL="/placeholder.png" // Replace with your placeholder image
        quality={75} // Adjust image quality (default is 75)
      />
    </div>
  );
};

export default OptimizedImage;