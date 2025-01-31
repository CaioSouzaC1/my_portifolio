import HomeComponent from "@/components/home";

const URL = "https://caiosouza.dev";

export const metadata = {
  title: "Caio César de Souza",
  description: "Desenvolvedor FullStack",
  openGraph: {
    url: URL + "/",
    title: "Caio César de Souza",
    description: "Desenvolvedor FullStack",
    images: [
      {
        url: URL + "/imgs/thumb.png",
        alt: "Caio César de Souza",
      },
    ],
  },
};

export default function Home() {
  return <HomeComponent />;
}
