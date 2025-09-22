import React, { ReactNode } from "react";
import Container from "./components/Container";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>;
    </div>
  );
};

export default Layout;
