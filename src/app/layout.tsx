import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FirUza Nail Studio",
  description: "Пространство для тех, кто любит красоту и ценит качество",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="yclients-settings"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, h) {
                w.YCWidgetInit = w.YCWidgetInit || function() {
                  (w.YCWidgetInit.q = w.YCWidgetInit.q || []).push(arguments)
                };
                w.YCWidgetInit({
                  widget_id: '1333420',
                  app_id: 'widget',
                  mode: 'inline',
                  host: h
                });
                var a = d.getElementsByTagName('head')[0],
                  r = d.createElement('script');
                r.async = 1;
                r.src = s;
                r.charset = 'utf-8';
                a.appendChild(r);
              })(window, document, 'https://w1333420.yclients.com/widgetJS', 'https://w1333420.yclients.com');
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
