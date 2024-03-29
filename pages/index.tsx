import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getCookie, hasCookie } from "cookies-next";
import { GetServerSideProps } from "next";

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
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";

export default function Home({
  tags,
  questions,
  reputations,
  stats,
  user,
}: {
  questions: any;
  tags: any;
  reputations: any;
  stats: any;
  user: any;
}) {
  // hooks
  const { query } = useRouter();
  const { t } = useTranslation();

  // states
  const [selectedTab, setSelectedTab] = useState<string>(
    query.filter ? String(query.filter) : "recent"
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <>
        <Head>
          <title>{t("title")}</title>
          <meta name="description" content={t("title")} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MainLayout
          user={user}
          sidebar={
            <MainSidebar
              tags={questions.relatedTags}
              reputations={reputations.data}
              stats={stats.data}
            />
          }
          mainBanner={<MainBanner />}
        >
          <MainTab
            data={questions}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab as string}
          />
        </MainLayout>
      </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
  locale,
  ...ctx
}) => {
  const { limit = 10, page = 1, filter = "recent" } = query;

  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const questions = await getQuestions({ limit, page, filter, user } as {
    limit: number;
    page: number;
    filter: string;
    user: any;
  });
  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });
  const stats = await getStats({ user });

  if (!questions || !tags || !reputations || !stats) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      questions,
      tags,
      reputations,
      stats,
      user,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
