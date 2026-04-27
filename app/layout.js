import "./globals.css";

export const metadata = {
  title: "리코 스튜디오 — 혁신적인 디지털 경험",
  description: "리코 스튜디오는 최고 수준의 디지털 솔루션을 제공하는 IT 전문 기업입니다.",
  keywords: "IT 기업, 디지털 에이전시, 웹 개발, 한국 디자인, UI/UX",
  openGraph: {
    title: "리코 스튜디오",
    description: "혁신적인 디지털 경험",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
