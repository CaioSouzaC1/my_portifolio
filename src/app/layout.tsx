import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const mont = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="pt-BR">
      <Head>
        <title>Caio César de Souza</title>
        <meta
          name="description"
          content="Meu portifólio, criado para demonstrar minhas skills e experiências profissionais."
        />
        <meta property="og:image" content="/imgs/CaioPNG.png" />
        <meta property="og:title" content="Caio César de Souza" />
        <meta
          property="og:description"
          content="Meu portifólio, criado para demonstrar minhas skills e experiências profissionais."
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className={mont.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
