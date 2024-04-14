import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Main>{/* <Outlet /> */}</Main>
      <Footer />
    </>
  );
}

export default Layout;
