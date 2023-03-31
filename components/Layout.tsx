import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="max-w-screen-xl m-auto px-9">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
