import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Empresa:{" "}
            <a
              href="https://next.tec.br/"
              target="_blank"
              className="underline font-bold"
              rel="noopener noreferrer">
              {" "}
              Next Tecnologia
            </a>
            . <br /> Iniciei como{" "}
            <span className="font-semibold">Júnior III</span> atualmente meu
            cargo é <span className="font-semibold">Pleno I</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkCardProject
              text="Estruturação do banco de dados, arquitetura base da api e
                desenvolvimento total do frontend."
              src="/imgs/work/mooall.png"
            />
            <WorkCardProject
              text="Refatoração, Manutenção e desenvolvimento de novas
                funcionalidades."
              src="/imgs/work/mkt.png"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022/2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Empresa:{" "}
            <a
              href="https://objctv.one/"
              target="_blank"
              className="underline font-bold"
              rel="noopener noreferrer">
              {" "}
              Objctv
            </a>
            . <br /> Iniciei como{" "}
            <span className="font-semibold">Júnior I</span> e finalizei minha
            passagem como <span className="font-semibold">Júnior III</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkCardProject
              text="Manutenção e desenvolvimento de novas páginas e funcionalidades."
              src="/imgs/work/jp.png"
            />
            <WorkCardProject
              text="Construção inicial do tema e desenvolvimento de funcionalidades."
              src="/imgs/work/est.png"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020/2021",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-xl font-normal">
            Estudei bastante, muito Youtube e Udemy.
          </p>
          <p className="text-sm">
            Fiz diversos projetos pessoais, mas não cabem aqui por conta da
            qualidade baixa, que é normal quando está aprendendo algo novo.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full my-8">
      <Timeline data={data} />
    </div>
  );
}

function WorkCardProject({ text, src }: { text: string; src: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">{text}</p>
      <Image
        src={src}
        alt="Work Project"
        width={500}
        height={500}
        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-top"
      />
    </div>
  );
}