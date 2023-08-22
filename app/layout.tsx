import type { Metadata } from "next";
import { Aleo } from "next/font/google";

const aleo = Aleo({ adjustFontFallback: true, subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB",
  description: "See the movies you love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={aleo.className}>{children}</body>
    </html>
  );
}
