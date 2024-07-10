import Image from "next/image";
import Globals from "@/components/globals";

export default function Home() {
  return (
    <section className={`${Globals.default_style_page}`}>
      <div className="w-full">
        <div className={`w-1/2`}>
          <h1 className={`text-6xl roboto-bold`}>
            Encontre a melhor solução para o seu negócio aqui
          </h1>
          <p className={`raleway-medium`}>
            Nossos profissionais, especialistas em várias áreas, criam soluções que transformam seu dia a dia.
          </p>
        </div>

        <div className={`w-1/2`}>

        </div>
      </div>

      <div>

      </div>
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