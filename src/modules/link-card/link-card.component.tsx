import Image from "next/image";

export const LinkCard = ({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 transition-all hover:scale-105"
    >
      <div className="flex w-full text-center">
        <div className="h-10 w-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  );
};
