import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function ContactSection() {
  const buttons = [
    {
      link: "https://www.linkedin.com/in/caiocesardesouza2003/",
      title: "Linkedin",
    },
    {
      link: "https://api.whatsapp.com/send?phone=5519988506448",
      title: "WhatsApp",
    },
    {
      link: "https://github.com/CaioSouzaC1",
      title: "GitHub",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 mb-28">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center mt-6 relative z-20 py-6">
        Entre em contato comigo
      </h1>
      <div className="flex justify-center text-center gap-4">
        {buttons.map((button, i) => (
          <Link key={i} href={button.link}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-background text-black dark:text-white flex items-center space-x-2">
              <span>{button.title}</span>
            </HoverBorderGradient>
          </Link>
        ))}
      </div>
    </div>
  );
}
