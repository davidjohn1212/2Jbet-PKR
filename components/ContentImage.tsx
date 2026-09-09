import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
  priority?: boolean;
};

/** SEO-friendly content image with alt, title, and visible description caption. */
export function ContentImage({
  src,
  alt,
  title,
  description,
  width,
  height,
  priority = false,
}: ContentImageProps) {
  return (
    <figure className="content-image">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        className="content-image-img"
        sizes="(max-width: 900px) 100vw, min(900px, 100%)"
        priority={priority}
      />
      <figcaption className="content-image-caption">
        <span className="content-image-caption-title">{title}</span>
        <span className="content-image-caption-desc">{description}</span>
      </figcaption>
    </figure>
  );
}
