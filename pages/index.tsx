import Head from "next/head";
import { useEffect, useState } from "react";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainTab from "@/components/tabs/Main.tabs";

// Mui
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { useCookies } from "react-cookie";
import { parseCookies } from "@/helper/cookie";
import { useAppDispatch } from "@/lib/redux.hooks";
import { setUser } from "@/redux/auth/auth.reducer";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: any }) {
  // hooks
  const dispatch = useAppDispatch();
  const router = useRouter();
  // states
  const [selectedTab, setSelectedTab] = useState("recentQuestions");

  if (data) {
    const user = JSON?.parse(data?.user);
    dispatch(setUser(user));
  } else {
    router.replace("/auth/login");
  }

  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout sidebar={<MainSidebar />}>
        <MainTab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </MainLayout>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const {};

//   return {};
// }

Home.getInitialProps = async ({ req, res }: { req: any; res: any }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
