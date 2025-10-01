import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getBandProfile } from "@/lib/content-loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Generate metadata from band profile
async function generateMetadata(): Promise<Metadata> {
  try {
    const profile = await getBandProfile();
    return {
      title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
      description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
      keywords: profile.seo?.keywords || [],
      openGraph: {
        title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
        description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
        images: profile.seo?.ogImage ? [profile.seo.ogImage] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
        description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
      },
    };
  } catch (error) {
    return {
      title: "Band Website",
      description: "Official band website",
    };
  }
}

export const metadata = await generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
