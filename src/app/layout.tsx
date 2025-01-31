import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
      <body className={mont.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
