import React from "react";

const Layout = ({ children, showHeader, title, subtitle }) => {
  return (
    <>
      {showHeader && (
        <header className="container space-y-2 mt-5 mb-10">
          <h1 className="text-2xl uppercase">{title}</h1>
          <p>{subtitle}</p>
        </header>
      )}
      <div className="flex flex-col container mt-20">{children}</div>
    </>
  );
};

export default Layout;
