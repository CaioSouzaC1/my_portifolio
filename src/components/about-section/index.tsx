import { BackgroundLines } from "@/components/ui/background-lines";

export function AboutSection() {
  return (
    <div className="relative">
      <BackgroundLines className="flex items-center justify-center w-full flex-col gap-2 !h-auto py-12 px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Sobre mim
        </h2>
        <p className="font-medium text-center">
          Caio César de Souza, praticamente casado e corinthiano.
        </p>
        <p className="font-medium text-center">
          Sou <span className="font-bold">Tech Lead</span>. Lidero o time na
          construção de sistemas internos e integrações, do zero até produção, e
          sigo hands-on no código todos os dias.
        </p>
        <p className="font-medium text-center">
          Trabalho com TypeScript de ponta a ponta: Node.js, NestJS e Jest no
          back-end, Next.js, React e Tailwind no front-end, com PostgreSQL,
          MySQL e GCP na infra. Também tenho estrada em PHP, com Laravel e
          WordPress, além de experiência com portais de notícias, SaaS e APIs.
        </p>
        <p className="font-medium text-center">
          Meu foco é entregar sistema que roda de verdade em produção:
          escalável, com observabilidade e no mínimo 70% de cobertura de testes
          nas regras de negócio.
        </p>
        <p className="font-medium text-center">
          Antes de programar, passei mais de 2 anos como vendedor. Isso me deu
          facilidade para lidar direto com cliente, entender o problema por trás
          do pedido e traduzir isso em decisão técnica.
        </p>
        <p className="font-medium text-center">
          Concluí o curso técnico de Informática para Internet e continuo
          estudando, com mais de 60 certificados até aqui.
        </p>
      </BackgroundLines>
    </div>
  );
}
