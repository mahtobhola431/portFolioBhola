import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Bhola Mahto — Full Stack Developer",
    template: "%s | Bhola Mahto",
  },
  description:
    "Full Stack Developer based in Mumbai with 2+ years of experience in React, Next.js, Node.js, and scalable cloud architectures. Available for exciting opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Mumbai Developer",
    "Frontend Engineer",
    "Software Engineer",
    "Bhola Mahto",
  ],
  authors: [{ name: "Bhola Mahto", url: "https://bholamahto.dev" }],
  creator: "Bhola Mahto",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bholamahto.dev",
    title: "Bhola Mahto — Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years building scalable web applications, SEO systems, and production APIs.",
    siteName: "Bhola Mahto Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhola Mahto – Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhola Mahto — Full Stack Developer",
    description: "Full Stack Developer | React • Next.js • Node.js • Cloud",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bhola Mahto",
              url: "https://bholamahto.dev",
              email: "bholamahto255@gmail.com",
              telephone: "+919326272432",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://linkedin.com/in/bhola-mahto-39172a192",
                "https://github.com/mahtobhola431",
              ],
            }),
          }}
        />
      </head>
  
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
