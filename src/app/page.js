import Image from "next/image";
import Globals from "@/components/globals";
  
export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      <h1>Inicio</h1>
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
    </section>
  );
}