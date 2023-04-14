import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
