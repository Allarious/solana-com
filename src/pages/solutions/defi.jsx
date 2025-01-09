import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";

import Layout from "@/components/solutions/layout";
import HTMLHead from "@/components/HTMLHead";
import Button from "@/components/solutions/Button";
import FooterCallout from "@/components/solutions/FooterCallout";
import EcosystemSlider, {
  Card,
} from "../../components/solutions/EcosystemSlider";
import SuccessStories, {
  StoryCard,
} from "@/components/solutions/SuccessStories";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import LongformItem from "@/components/solutions/LongformItem";
import BasicCallout from "@/components/solutions/BasicCallout";
import Text, { AnimatedText, GradientText } from "@/components/shared/Text";

import styles from "./Defi.module.scss";

import * as mobileHeroWithSolana from "../../../assets/solutions/defi/DeFi_MobileHero_WithSolana_V1.json";
import * as mobileHeroWithoutSolana from "../../../assets/solutions/defi/DeFi_MobileHero_WithoutSolana_V1.json";
import * as desktopHeroWithSolana from "../../../assets/solutions/defi/DeFi_DesktopHero_WithSolana_V1.json";
import * as desktopHeroWithoutSolana from "../../../assets/solutions/defi/DeFi_DesktopHero_WithoutSolana_V1.json";

import credix from "../../../assets/solutions/defi/credix.svg";
import jupiter from "../../../assets/solutions/defi/jupiter.svg";
import kamino from "../../../assets/solutions/defi/kamino.svg";
import marginfi from "../../../assets/solutions/defi/marginfi.svg";
import openbook from "../../../assets/solutions/defi/openbook.svg";
import orca from "../../../assets/solutions/defi/orca.svg";
import phoenix from "../../../assets/solutions/defi/phoenix.svg";
import pyth from "../../../assets/solutions/defi/pyth.svg";
import pyusd from "../../../assets/solutions/defi/pyusd.svg";
import raydium from "../../../assets/solutions/defi/raydium.svg";
import save from "../../../assets/solutions/defi/save.svg";

const LottieHeroWithTabs = dynamic(
  () => import("@/components/solutions/LottieHeroWithTabs"),
  { ssr: false },
);

const CardsSlider = dynamic(() => import("@/components/shared/CardsSlider"), {
  ssr: false,
});

const MotionSlideIn = dynamic(
  () => import("@/components/shared/Motions").then((mod) => mod.MotionSlideIn),
  { ssr: false },
);

const DeFi = () => {
  const { t } = useTranslation();

  const heroTabs = [
    {
      buttonTitle: t("solutions-defi.hero.tabs.0.trigger-title"),
      content: {
        title: t("solutions-defi.hero.tabs.0.title"),
        subtitle: t("solutions-defi.hero.tabs.0.subtitle"),
        lottieMobile: mobileHeroWithSolana,
        lottieDesktop: desktopHeroWithSolana,
      },
    },
    {
      buttonTitle: t("solutions-defi.hero.tabs.1.trigger-title"),
      content: {
        title: t("solutions-defi.hero.tabs.1.title"),
        subtitle: t("solutions-defi.hero.tabs.1.subtitle"),
        lottieMobile: mobileHeroWithoutSolana,
        lottieDesktop: desktopHeroWithoutSolana,
      },
    },
  ];

  const statsContent = t("solutions-defi.stats", {
    returnObjects: true,
  });

  const ecosystemCards = [
    <Card
      key="card-1"
      img={jupiter}
      url="https://jup.ag/"
      title={t("solutions-defi.ecosystem.card-jupiter.title")}
      text={t("solutions-defi.ecosystem.card-jupiter.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-2"
      img={orca}
      url="https://www.orca.so/"
      title={t("solutions-defi.ecosystem.card-orca.title")}
      text={t("solutions-defi.ecosystem.card-orca.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-3"
      img={raydium}
      url="https://raydium.io/swap/"
      title={t("solutions-defi.ecosystem.card-raydium.title")}
      text={t("solutions-defi.ecosystem.card-raydium.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-4"
      img={phoenix}
      url="https://www.phoenix.trade/"
      title={t("solutions-defi.ecosystem.card-phoenix.title")}
      text={t("solutions-defi.ecosystem.card-phoenix.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-5"
      img={openbook}
      url="https://www.openbook.ag/"
      title={t("solutions-defi.ecosystem.card-openbook.title")}
      text={t("solutions-defi.ecosystem.card-openbook.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-6"
      img={kamino}
      url="https://app.kamino.finance/"
      title={t("solutions-defi.ecosystem.card-kamino.title")}
      text={t("solutions-defi.ecosystem.card-kamino.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-7"
      img={save}
      url="https://save.finance/"
      title={t("solutions-defi.ecosystem.card-save.title")}
      text={t("solutions-defi.ecosystem.card-save.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-8"
      img={marginfi}
      url="https://www.marginfi.com/"
      title={t("solutions-defi.ecosystem.card-marginfi.title")}
      text={t("solutions-defi.ecosystem.card-marginfi.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-9"
      img={pyth}
      url="https://www.fireblocks.com/customers/worldpay/"
      title={t("solutions-defi.ecosystem.card-pyth.title")}
      text={t("solutions-defi.ecosystem.card-pyth.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-10"
      img={pyusd}
      url="https://www.fireblocks.com/customers/worldpay/"
      title={t("solutions-defi.ecosystem.card-pyusd.title")}
      text={t("solutions-defi.ecosystem.card-pyusd.text")}
      className={styles.EcosystemCard}
    />,
    <Card
      key="card-11"
      img={credix}
      url="https://www.fireblocks.com/customers/worldpay/"
      title={t("solutions-defi.ecosystem.card-credix.title")}
      text={t("solutions-defi.ecosystem.card-credix.text")}
      className={styles.EcosystemCard}
    />,
  ];

  const caseStudyCards = [
    <StoryCard
      key="case-study-card-1"
      logo={"/solutions/defi/pyth-logo.webp"}
      logoAlt="Pyth logo"
      mobileImage={"/solutions/defi/pyth-main.jpg"}
      desktopImage={"/solutions/defi/pyth-main.jpg"}
      imageAlt="Pyth Main"
      text={
        <Trans i18nKey="solutions-defi.case-studies.cards.item-one.excerpt" />
      }
      buttonText={t("solutions-defi.case-studies.cards.item-one.button")}
      buttonUrl="https://solana.com/news/case-study-pyth"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      mainImageClassName={styles.StoryCardImage}
    />,
    <StoryCard
      key="case-study-card-2"
      logo={"/solutions/defi/etherfuse-logo.svg"}
      logoAlt="Etherfuse logo"
      mobileImage={"/solutions/defi/etherfuse-main.webp"}
      desktopImage={"/solutions/defi/etherfuse-main.webp"}
      imageAlt="Helio"
      text={
        <Trans i18nKey="solutions-defi.case-studies.cards.item-two.excerpt" />
      }
      buttonText={t("solutions-defi.case-studies.cards.item-two.button")}
      buttonUrl="https://solana.com/news/case-study-etherfuse"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      mainImageClassName={styles.StoryCardImage}
    />,
  ];

  const developerResourcesLinks = [
    <YDeveloperResourcesLink
      key="quick-start"
      title={t("solutions-defi.developer-resources.links.quick-start.title")}
      link="https://solana.com/docs/intro/wallets"
    />,
    <YDeveloperResourcesLink
      key="solana-pay"
      title={t("solutions-defi.developer-resources.links.solana-pay.title")}
      link="https://solana.com/docs/advanced/actions"
    />,
    <YDeveloperResourcesLink
      key="helio"
      title={t("solutions-defi.developer-resources.links.helio.title")}
      link="https://solana.com/developers/guides/token-extensions/getting-started"
    />,
  ];

  const DetailCard = ({ title, text, iconSrc }) => (
    <div className={styles.DetailCard}>
      <div className={styles.DetailCardInner}>
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className={styles.DetailCardIcon}
        />
        <Text element="h3" as="heading">
          {title}
        </Text>
        <Text element="p" as="paragraph">
          {text}
        </Text>
      </div>
    </div>
  );

  const detailCards = [
    <DetailCard
      title={t("solutions-defi.details.capital-efficiency.title")}
      text={t("solutions-defi.details.capital-efficiency.text")}
      iconSrc="/solutions/defi/icons/Receipt.svg"
      key="detail-card-1"
    />,
    <DetailCard
      title={t("solutions-defi.details.high-speed-state-machine.title")}
      text={t("solutions-defi.details.high-speed-state-machine.text")}
      iconSrc="/solutions/defi/icons/Speedometer.svg"
      key="detail-card-2"
    />,
    <DetailCard
      title={t("solutions-defi.details.limitless-composability.title")}
      text={t("solutions-defi.details.limitless-composability.text")}
      iconSrc="/solutions/defi/icons/PuzzlePiece.svg"
      key="detail-card-3"
    />,
  ];

  return (
    <Layout>
      <HTMLHead
        title={t("solutions-defi.meta.title")}
        description={t("solutions-defi.meta.description")}
      />

      <div className={styles.PageWrapper} id="defi-page">
        <LottieHeroWithTabs tabs={heroTabs} />

        <div className={styles.StatsSection}>
          <AnimatedText element="h2" as="heading">
            <div className={"d-md-none"}>
              <Trans
                i18nKey="solutions-defi.stats.title"
                components={{
                  gradient: (
                    <GradientText gradient="linear-gradient(270deg, #9945ff 0%, #eb54bc 50.57%, #ff754a 100%)" />
                  ),
                }}
              />
            </div>

            <div className={"d-none d-md-block"}>
              <Trans
                i18nKey="solutions-defi.stats.title"
                components={{
                  gradient: (
                    <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%)" />
                  ),
                }}
              />
            </div>
          </AnimatedText>

          <div className={styles.StatsButtons}>
            <MotionSlideIn>
              <Button
                text={t("solutions-defi.stats.start-btn")}
                url="#developer-resources"
              />
              <Button
                text={t("solutions-defi.stats.explore-btn")}
                url="/solutions/wallets-explorer"
                theme="secondary"
                target="_blank"
              />
            </MotionSlideIn>
          </div>

          <div className={styles.StatsContent}>
            <div className={styles.Stat}>
              <MotionSlideIn>
                <Text element="h3" as="heading">
                  {statsContent.stats[0].value}
                </Text>
                <Text element="p" as="paragraph">
                  {statsContent.stats[0].label}
                </Text>
              </MotionSlideIn>
            </div>

            <div className={styles.Stat}>
              <MotionSlideIn>
                <Text element="h3" as="heading">
                  {statsContent.stats[1].value}
                </Text>
                <Text element="p" as="paragraph">
                  {statsContent.stats[1].label}
                </Text>
              </MotionSlideIn>
            </div>

            <div className={styles.Stat}>
              <MotionSlideIn>
                <Text element="h3" as="heading">
                  {statsContent.stats[2].value}
                </Text>
                <Text element="p" as="paragraph">
                  {statsContent.stats[2].label}
                </Text>
              </MotionSlideIn>
            </div>
          </div>
        </div>

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-defi.callout-1.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%);" />
                ),
              }}
            />
          }
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="left"
              titleComponent={t("solutions-defi.longform-one.title")}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-defi.longform-one.subtitle"
                  components={[<Link href="/solutions/actions" key="0" />]}
                />
              }
              className={styles.LongformItem1}
            />
          </MotionSlideIn>

          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="right"
              titleComponent={t("solutions-defi.longform-two.title")}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-defi.longform-two.subtitle"
                  components={[
                    <Link href="/solutions/token-extensions" key="0" />,
                  ]}
                />
              }
              className={styles.LongformItem2}
            />
          </MotionSlideIn>
        </div>

        <div className={classNames("d-md-none", styles.DetailCardsWrapper)}>
          {detailCards}
        </div>

        <CardsSlider
          items={detailCards}
          className={classNames("d-none d-md-block", styles.DetailCardsWrapper)}
          cardsClassName={styles.DetailCards}
          cardWrapperClassName={styles.DetailCardWrapper}
        />

        <div id="ecosystem">
          <EcosystemSlider
            titleKey="solutions-defi.ecosystem.title"
            textKey="solutions-defi.ecosystem.text"
            cards={ecosystemCards}
            className={styles.EcosystemSlider}
            titleBlockClassName={styles.EcosystemSliderTitleBlock}
          />
        </div>

        <SuccessStories
          title={t("solutions-defi.case-studies.title")}
          cards={caseStudyCards}
          className={styles.SuccessStories}
        />

        <YDeveloperResources
          id="defi developer resources"
          title={t("solutions-defi.developer-resources.title")}
          subtitle={t("solutions-defi.developer-resources.subtitle")}
          links={developerResourcesLinks}
        />

        <FooterCallout
          title={t("solutions-defi.footer-callout.title")}
          text={t("solutions-defi.footer-callout.text")}
          btnText={t("solutions-defi.footer-callout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t("solutions-defi.footer-callout.btn-large")}
          btnLargeUrl="bd-defi@solana.org"
          className={styles.FooterCallout}
          topSectionClassName={styles.FooterCalloutTopSection}
          buttonLargeClassName={styles.FooterCalloutButtonLarge}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default DeFi;
