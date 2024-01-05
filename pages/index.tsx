import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getCookie, hasCookie } from "cookies-next";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainTab from "@/components/tabs/Main.tabs";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import MainBanner from "@/components/banners/Main.banners";

// i18next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// services
import { getQuestions } from "@/redux/questions/question.services";
import { getTags } from "@/redux/tags/tags.services";

export default function Home({
  tags,
  questions,
}: {
  questions: any;
  tags: any;
}) {
  // hooks
  const { locale } = useRouter();
  const { t } = useTranslation();
  // states
  const [selectedTab, setSelectedTab] = useState("recentQuestions");

  useEffect(() => {
    if (locale === "fa") {
      document.dir = "rtl";
    } else if (locale === "en") {
      document.dir = "ltr";
    }
  });

  console.log(questions);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        sidebar={<MainSidebar tags={questions.relatedTags} />}
        mainBanner={<MainBanner />}
      >
        <MainTab
          data={questions}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({
  query,
  req,
  res,
  locale,
  ...ctx
}: any) {
  const { limit = 10, page = 1 } = query;

  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const questions = await getQuestions({ limit, page, user });
  const tags = await getTags({ user });

  return {
    props: {
      questions,
      tags,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
