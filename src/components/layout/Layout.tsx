import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
interface Props {
  children: any
}
export default function Layout(props: Props ) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
