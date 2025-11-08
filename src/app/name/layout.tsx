import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Your Name - Next.js App",
  description: "A simple form to enter your name. Built with Next.js for optimal performance and SEO.",
  keywords: "name form, Next.js, user input",
  openGraph: {
    title: "Enter Your Name",
    description: "Interactive name entry page.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}