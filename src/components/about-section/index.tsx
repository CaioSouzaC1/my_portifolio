import { BackgroundLines } from "@/components/ui/background-lines";
import { useMemo } from "react";

export function AboutSection() {

    const birthDate = new Date('2003-09-06'); 

    const age = useMemo(() => {
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      const isBeforeBirthday =
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
  
      if (isBeforeBirthday) {
        years--;
      }
      return years;
    }, [birthDate]);

    return (
      <div className="relative">
        <BackgroundLines className="flex items-center justify-center w-full flex-col gap-2 !h-80">
            <h2 className="text-center text-3xl font-bold tracking-tight">
                Sobre mim
            </h2>
            <p className="font-medium text-center">Caio César de Souza, {age} anos, praticamente casado e corinthiano.</p>
            <p className="font-medium text-center">Concluí o curso técnico de informática. Tenho com experiência em desenvolvimento de portais de notícias, Saas e apis.</p>
            <p className="font-medium text-center">Estou atuando como <span className="font-bold">Desenvolvedor Pleno I</span>, construindo apis para sistemas em Laravel e interfaces em NextJs.</p>
            <p className="font-medium text-center">Antes do dev, trabalhei mais de 2 anos como vendedor, por isso tenho experiência e facilidade para lidar diretamente com clientes.</p>

        </BackgroundLines>
    </div>
  );
}
