type Image = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type ImageCardProps = {
  image: Image;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

export default Image;
