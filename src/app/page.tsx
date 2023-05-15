import Image from "next/image";
import { LinkCard } from "@/modules/link-card/link-card.component";

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col items-center justify-center px-8 pt-16">
      <Image
        priority
        className="rounded-full"
        alt="Maxime Beaudoin"
        src="/maxisix.png"
        width={96}
        height={96}
      />

      <h1 className="mb-8 mt-4 text-xl font-bold text-white">
        Maxime Beaudoin
      </h1>

      <LinkCard
        title="My Personal Site"
        href="https://www.maximebeaudoin.com/"
      />
      <LinkCard title="Github" href="https://github.com/maxisix" />
      <LinkCard title="Medium" href="https://medium.com/@maximebeaudoin" />
      <LinkCard
        title="LinkedIn"
        href="https://www.linkedin.com/in/mabeaudoin/"
      />
    </main>
  );
}
