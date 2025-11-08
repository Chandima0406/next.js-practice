import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enter Your Name - Next.js App',
  description: 'A simple form to enter your name. Built with Next.js for optimal performance and SEO.',
  keywords: 'name form, Next.js, user input',
  openGraph: {
    title: 'Enter Your Name',
    description: 'Interactive name entry page.',
    type: 'website',
  },
};

export default function page() {
  return (
    <div>
      <div><h1>Enter Your Name</h1></div>
      <form>
        <input type="text" placeholder="Type your name...." />
      </form>
    </div>
  );
}
