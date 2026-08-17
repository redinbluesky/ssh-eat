import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shh-eat | 회의는 계속. 간식도 조용히.",
  description: "업무의 흐름을 덜 깨는 한입 오피스 스낵, Shh-eat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
