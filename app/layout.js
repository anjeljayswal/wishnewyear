import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy New Year🎉💖",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <link rel="icon" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fhappy.html&psig=AOvVaw0hZmpIou0rxLvjVtpnDSoT&ust=1735741271575000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi4kOea0ooDFQAAAAAdAAAAABAE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
