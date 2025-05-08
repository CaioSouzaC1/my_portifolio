import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  SiAmazonec2,
  SiBootstrap,
  SiDocker,
  SiFirebase,
  SiGithubactions,
  SiGooglecloud,
  SiGooglecloudHex,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTypeorm,
  SiTypeormHex,
  SiTypescript,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import { PinContainer } from "../ui/3d-pin";
import { useTheme } from "next-themes";

export function TechsSection() {
  useTheme();

  const techs = [
    {
      title: "Backend",
      pinTitle: "Languages / Frameworks / CMS",
      icons: [
        { icon: SiNodedotjs, color: "#5FA04E" },
        { icon: SiPhp, color: "#777BB4" },
        { icon: SiTypescript, color: "#3178C6" },
        { icon: SiLaravel, color: "#FF2D20" },
        { icon: SiWordpress, color: "#21759B" },
        { icon: SiNestjs, color: "#E0234E" },
      ],
    },
    {
      title: "Frontend",
      pinTitle: "Frameworks / Libs / Css Frameworks",
      icons: [
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiNextdotjs, color: "#fff" },
        { icon: SiShadcnui, color: "#fff" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Database",
      pinTitle: "Databases / ORMs",
      icons: [
        { icon: SiMysql, color: "#4479A1" },
        { icon: SiSqlite, color: "#003B57" },
        { icon: SiPostgresql, color: "#4169E1" },
        { icon: SiFirebase, color: "#DD2C00" },
        { icon: SiPrisma, color: "#2D3748" },
        { icon: SiTypeorm, color: SiTypeormHex },
      ],
    },
    {
      title: "Infraestutura",
      pinTitle: "Clouds / CI CDS",
      icons: [
        { icon: SiAmazonec2, color: "#FF9900" },
        { icon: SiGooglecloud, color: SiGooglecloudHex },
        { icon: SiLinux, color: "#FCC624" },
        { icon: SiDocker, color: "#2496ED" },
        { icon: SiGithubactions, color: "#2088FF" },
      ],
    },
  ];

  return (
    <>
      <BackgroundBeamsWithCollision className="border-b border-accent">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
          <p className="font-bold text-3xl lg:text-4xl col-span-full text-center my-2 lg:my-8">
            Tecnologias que trabalho e/ou estudo
          </p>

          {techs.map((group, i) => (
            <div className="hidden lg:block" key={i}>
              <PinContainer title={group.pinTitle}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-6 divide-x divide-primary justify-center items-center">
                    {group.icons.map((Icon, j) => (
                      <Icon.icon
                        key={j}
                        color={Icon.color}
                        size={32}
                        className="text-primary flex justify-center items-center w-full"
                      />
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}

          <div className="flex flex-col gap-4 lg:hidden">
            {techs.map((group, i) => (
              <div
                key={i}
                className="flex p-4 rounded flex-col w-full border shadow-lg">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base">
                  {group.title}
                </h3>
                <div className="grid grid-cols-6 divide-x divide-primary justify-center items-center">
                  {group.icons.map((Icon, j) => (
                    <Icon.icon
                      key={j}
                      color={Icon.color}
                      size={32}
                      className="text-primary flex justify-center items-center w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
