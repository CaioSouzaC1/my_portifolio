import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const certificates = [
  "/certificates/Screenshot from 2025-05-28 23-04-03.png",
  "/certificates/Screenshot from 2025-05-28 23-05-36.png",
  "/certificates/Screenshot from 2025-05-28 23-05-41.png",
  "/certificates/Screenshot from 2025-05-28 23-05-43.png",
  "/certificates/Screenshot from 2025-05-28 23-05-49.png",
  "/certificates/Screenshot from 2025-05-28 23-05-56.png",
  "/certificates/Screenshot from 2025-05-28 23-05-59.png",
  "/certificates/Screenshot from 2025-05-28 23-06-04.png",
  "/certificates/Screenshot from 2025-05-28 23-06-09.png",
  "/certificates/Screenshot from 2025-05-28 23-06-22.png",
  "/certificates/Screenshot from 2025-05-28 23-06-24.png",
  "/certificates/Screenshot from 2025-05-28 23-06-28.png",
  "/certificates/Screenshot from 2025-05-28 23-06-30.png",
  "/certificates/Screenshot from 2025-05-28 23-06-42.png",
  "/certificates/Screenshot from 2025-05-28 23-06-51.png",
  "/certificates/Screenshot from 2025-05-28 23-06-54.png",
  "/certificates/Screenshot from 2025-05-28 23-07-04.png",
  "/certificates/Screenshot from 2025-05-28 23-07-23.png",
  "/certificates/Screenshot from 2025-05-28 23-07-25.png",
  "/certificates/Screenshot from 2025-05-28 23-07-28.png",
  "/certificates/Screenshot from 2025-05-28 23-07-32.png",
  "/certificates/Screenshot from 2025-05-28 23-07-35.png",
  "/certificates/Screenshot from 2025-05-28 23-07-37.png",
  "/certificates/Screenshot from 2025-05-28 23-07-40.png",
  "/certificates/Screenshot from 2025-05-28 23-07-42.png",
  "/certificates/Screenshot from 2025-05-28 23-07-47.png",
  "/certificates/Screenshot from 2025-05-28 23-07-51.png",
  "/certificates/Screenshot from 2025-05-28 23-07-55.png",
  "/certificates/Screenshot from 2025-05-28 23-07-57.png",
  "/certificates/Screenshot from 2025-05-28 23-07-59.png",
  "/certificates/Screenshot from 2025-05-28 23-08-02.png",
  "/certificates/Screenshot from 2025-05-28 23-08-06.png",
  "/certificates/Screenshot from 2025-05-28 23-08-13.png",
  "/certificates/Screenshot from 2025-05-28 23-08-15.png",
  "/certificates/Screenshot from 2025-05-28 23-08-18.png",
  "/certificates/Screenshot from 2025-05-28 23-08-22.png",
  "/certificates/Screenshot from 2025-05-28 23-08-26.png",
  "/certificates/Screenshot from 2025-05-28 23-08-29.png",
  "/certificates/Screenshot from 2025-05-28 23-08-31.png",
  "/certificates/Screenshot from 2025-05-28 23-08-33.png",
  "/certificates/Screenshot from 2025-05-28 23-08-40.png",
  "/certificates/Screenshot from 2025-05-28 23-08-45.png",
  "/certificates/Screenshot from 2025-05-28 23-09-05.png",
  "/certificates/Screenshot from 2025-05-28 23-09-12.png",
  "/certificates/Screenshot from 2025-05-28 23-09-14.png",
  "/certificates/Screenshot from 2025-05-28 23-09-17.png",
  "/certificates/Screenshot from 2025-05-28 23-09-20.png",
  "/certificates/Screenshot from 2025-05-28 23-09-22.png",
  "/certificates/Screenshot from 2025-05-28 23-09-23.png",
  "/certificates/Screenshot from 2025-05-28 23-09-25.png",
  "/certificates/Screenshot from 2025-05-28 23-09-27.png",
  "/certificates/Screenshot from 2025-05-28 23-09-29.png",
  "/certificates/Screenshot from 2025-05-28 23-09-31.png",
  "/certificates/Screenshot from 2025-05-28 23-09-44.png",
  "/certificates/Screenshot from 2025-05-28 23-09-59.png",
  "/certificates/Screenshot from 2025-05-28 23-10-13.png",
  "/certificates/Screenshot from 2025-05-28 23-10-24.png",
  "/certificates/Screenshot from 2025-05-28 23-10-33.png",
  "/certificates/Screenshot from 2025-05-28 23-10-41.png",
  "/certificates/Screenshot from 2025-05-28 23-10-59.png",
  "/certificates/Screenshot from 2025-05-28 23-11-25.png",
  "/certificates/Screenshot from 2025-05-28 23-11-34.png",
  "/certificates/Screenshot from 2025-05-28 23-11-45.png",
  "/certificates/Screenshot from 2025-05-28 23-12-07.png",
  "/certificates/Screenshot from 2025-05-28 23-12-21.png",
  "/certificates/Screenshot from 2025-05-28 23-12-24.png",
];

const shuffledCertificates = certificates.sort(() => Math.random() - 0.5);

const firstGroup = shuffledCertificates.slice(0, 8);
const secondGroup = shuffledCertificates.slice(8, 16);
const thirdGroup = shuffledCertificates.slice(16, 24);
const fourthGroup = shuffledCertificates.slice(24, 32);

export function MarqueeDemo() {
  return (
    <div className="mb-8">
      <p className="font-bold text-3xl lg:text-4xl col-span-full text-center my-2 lg:my-8">
        Alguns dos meus certificados (+ de 60 no total)
      </p>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {firstGroup.map((src, index) => (
            <Image
              key={index}
              width={970}
              height={700}
              quality={100}
              src={src}
              alt={`Certificate ${index + 1}`}
              className="h-32 w-auto rounded-lg shadow-md"
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {secondGroup.map((src, index) => (
            <Image
              key={index}
              width={970}
              height={700}
              quality={100}
              src={src}
              alt={`Certificate ${index + 1}`}
              className="h-32 w-auto rounded-lg shadow-md"
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:35s]">
          {thirdGroup.map((src, index) => (
            <Image
              key={index}
              width={970}
              height={700}
              quality={100}
              src={src}
              alt={`Certificate ${index + 1}`}
              className="h-32 w-auto rounded-lg shadow-md"
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {fourthGroup.map((src, index) => (
            <Image
              key={index}
              width={970}
              height={700}
              quality={100}
              src={src}
              alt={`Certificate ${index + 1}`}
              className="h-32 w-auto rounded-lg shadow-md"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
