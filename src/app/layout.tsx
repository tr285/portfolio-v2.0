import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Tukaram Gore | Data Engineer & DevOps Specialist",
    template: "%s | Tukaram Gore",
  },
  description: "Portfolio of Tukaram Gore, a Data Engineer and DevOps Specialist focusing on Python, Cloud Computing, Machine Learning, and highly scalable architectures.",
  keywords: ["Tukaram Gore", "Data Engineer", "DevOps", "Python", "React", "AWS", "Machine Learning", "Software Engineer", "Portfolio"],
  authors: [{ name: "Tukaram Gore", url: "https://tukaramgore.com" }],
  creator: "Tukaram Gore",
  metadataBase: new URL("https://tukaramgore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tukaram Gore | Data Engineer & DevOps",
    description: "Architecting scalable systems and intelligent data pipelines.",
    url: "https://tukaramgore.com",
    siteName: "Tukaram Gore Portfolio",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Tukaram Gore",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tukaram Gore | Data Engineer & DevOps",
    description: "Architecting scalable systems and intelligent data pipelines.",
    creator: "@tukaramgore",
    images: ["/hero-image.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
