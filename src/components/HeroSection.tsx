import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-10 md:py-0 text-white">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />{" "}
        <div className="p-4 relative z-10  w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of Music
          </h1>

          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            ipsa inventore. Tempora molestiae eum quaerat autem eius, qui
            tenetur illo quasi quis amet saepe ut voluptates dignissimos
            laudantium, aliquid obcaecati.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>Explore Coureses</Link>
          </div>
        </div>
      </div>
    </>
  );
}
