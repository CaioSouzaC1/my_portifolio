"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ProjectsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] overflow-y-auto max-h-48">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        <div className="flex flex-col gap-1 my-8">
          <h3 className="text-center text-3xl font-bold tracking-tight">
            Projetos
          </h3>
          <span className="text-center">
            Alguns dos que fiz ao longo da minha caminhada e me orgulho de
            compartilhar.
          </span>
        </div>
        {cards.map((card, index) => (
          <motion.div
            layoutId={`id-${index}-card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex gap-y-2 lg:gap-y-0 flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`id-${index}-image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top mx-auto"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`id-${index}-title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`id-${index}-description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`id-${index}-button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-primary hover:text-white text-black mt-4 md:mt-0">
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "FullStack (Laravel, Nextjs & React Native)",
    title: "Idx Library",
    src: "/imgs/idx.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/idx",
    content: () => {
      return (
        <p>
          iDX é uma plataforma de biblioteca online que permite aos
          administradores cadastrar categorias e livros pelo sistema web e aos
          usuários comuns lerem e acompanharem o progresso de leitura no app
          mobile.
        </p>
      );
    },
  },
  {
    description: "Frontend NextJS",
    title: "Seat Scheduler Web",
    src: "/imgs/SeatScheduler.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/seat_scheduler-web",
    content: () => {
      return (
        <p>
          Seat Scheduler é uma aplicação para gerenciar reservas de mesas em
          restaurantes, permitindo que administradores aceitem ou cancelem
          reservas de forma simples e eficiente.
        </p>
      );
    },
  },
  {
    description: "Backend AdonisJs",
    title: "Seat Scheduler Api",
    src: "/imgs/API.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/seat_scheduler-api",
    content: () => {
      return (
        <p>
          Seat Scheduler API é a API que alimenta o sistema de reservas de mesas
          para restaurantes. Foi desenvolvida utilizando AdonisJS, TypeScript,
          Vine e PostgreSQL.
        </p>
      );
    },
  },
  {
    description: "Mobile App Flutter",
    title: "Seat Scheduler Mobile",
    src: "/imgs/SeatSchedulerMobile.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/seat_scheduler-mobile",
    content: () => {
      return (
        <p>
          Seat Scheduler App é o aplicativo móvel desenvolvido em Flutter e Dart
          que permite aos usuários visualizar e gerenciar suas reservas em
          restaurantes.
        </p>
      );
    },
  },
  {
    description: "Tema Wordpress Headless",
    title: "Global Note & News",
    src: "/imgs/gnn.jpeg",
    ctaText: "Ver",
    ctaLink:
      "https://www.linkedin.com/posts/caiocesardesouza2003_wordpress-nextjs-headless-activity-7247939588931866624-SsxT?utm_source=share&utm_medium=member_desktop",
    content: () => {
      return (
        <p>
          Tema wordpress headless para getiso com WPGraphQL no backend e Next.js
          no front-end.
        </p>
      );
    },
  },
  {
    description: "Frontend NextJS",
    title: "Marvel",
    src: "/imgs/marvel.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/ntf",
    content: () => {
      return (
        <p>
          Este projeto é um site desenvolvido com Next.js 14, React Query,
          Tailwind CSS, TypeScript e Shadcn UI. Ele utiliza a API da Marvel para
          exibir informações sobre personagens, quadrinhos e outros dados
          relacionados ao universo Marvel.
        </p>
      );
    },
  },
  {
    description: "Frontend NextJS",
    title: "Futsal Web",
    src: "/imgs/futsal.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/futsal-web",
    content: () => {
      return (
        <p>
          Este projeto é um sistema para gerenciamento de campeonatos de futsal
          desenvolvido com Next.js 14, React Query, Tailwind CSS, TypeScript e
          Shadcn UI.
        </p>
      );
    },
  },
  {
    description: "Backend Laravel",
    title: "Futsal Api Laravel",
    src: "/imgs/API.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/futsal-api-laravel",
    content: () => {
      return (
        <p>
          Este é um projeto API Laravel para gerenciar informações sobre
          jogadores, times e partidas de futsal.
        </p>
      );
    },
  },
  {
    description: "Backend Node",
    title: "Futsal Api Node",
    src: "/imgs/API.png",
    ctaText: "Ver",
    ctaLink: "https://github.com/CaioSouzaC1/futsal-api",
    content: () => {
      return (
        <p>
          Este é um projeto API Node para gerenciar informações sobre jogadores,
          times e partidas de futsal, desenvolvido com Express e Prisma.
        </p>
      );
    },
  },

  {
    description: "Tema Wordpress",
    title: "Notizia",
    src: "/imgs/Notizia.png",
    ctaText: "Ver",
    ctaLink:
      "https://www.linkedin.com/posts/caiocesardesouza2003_notizia-wordpress-wordpressdeveloper-activity-7127428336242339840-aLOF?utm_source=share&utm_medium=member_desktop",
    content: () => {
      return (
        <p>Tema wordpress para portais de notícia feito com Tailwindcss.</p>
      );
    },
  },
];
