import React from 'react';
import { Sanity } from '@/models/sanity.model';
import Seo from '../seo';

interface LayoutProps {
  seo: Sanity.Seo | null;
  // pageID?: string;
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ seo, title, children }: LayoutProps) => {
  return (
    <>
      <Seo seo={seo} title={title} />
      <main id="main">{children}</main>;
    </>
  );
};

export default Layout;
