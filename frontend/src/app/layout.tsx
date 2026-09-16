import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PIE 2026.2",
  description: "Projeto Integrador de Extensão — 2026.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
