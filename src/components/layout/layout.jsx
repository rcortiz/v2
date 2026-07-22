import React from "react";

const Layout = ({ children, showHeader, title, subtitle }) => {
  return (
    <div className="pb-12 pt-8 sm:pt-16">
      {showHeader && (
        <header className="container mb-8 max-w-6xl space-y-2">
          <h1 className="text-3xl">{title}</h1>
          <p className="max-w-2xl text-primary/70">{subtitle}</p>
        </header>
      )}
      <div className="container flex max-w-6xl flex-col">{children}</div>
    </div>
  );
};

export default Layout;
