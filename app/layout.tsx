import clsx from "clsx";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("w-full h-auto min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
