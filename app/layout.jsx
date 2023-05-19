import Container from './Container';
import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ["400", "500"] });

export const metadata = {
  title: 'Cuboost Utilities',
  description: 'Cuboost Utilities from A to Z.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} flex justify-center items-center overflow-hidden`}>

        {/* Background ellipses */}
        <div className=' hidden md:block w-screen h-screen overflow-hidden absolute top-0 left-0'>
          <div id='ellipse-1' />
          <div id='ellipse-2' />
        </div>

        {/* White Container */}
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
