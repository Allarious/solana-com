import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";

import Layout from "@/components/solutions/layout";
import HTMLHead from "@/components/HTMLHead";
import Stats from "@/components/solutions/Stats";
import BasicCallout from "@/components/solutions/BasicCallout";
import LongformItem from "@/components/solutions/LongformItem";
import FooterCallout from "@/components/solutions/FooterCallout";
import CardsSlider from "@/components/shared/CardsSlider";
import { StoryCard } from "@/components/solutions/SuccessStories";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import { MotionSlideIn } from "@/components/shared/Motions";
import { GradientText } from "@/components/shared/Text";
import SuccessStories from "@/components/solutions/SuccessStories";

import styles from "./Loyalty.module.scss";

const Loyalty = () => {
  const { t } = useTranslation();

  const statsContent = t("solutions-loyalty.stats", {
    returnObjects: true,
  });

  const longformContent = t("solutions-loyalty.longform", {
    returnObjects: true,
  });

  const caseStudyCards = [
    <StoryCard
      logo={"/solutions/loyalty/bobaguys-logo.webp"}
      logoAlt={t("solutions-loyalty.case-study-cards.cards.boba-guys.logo-alt")}
      mobileImage={"/solutions/loyalty/bobaguys-main.png"}
      desktopImage={"/solutions/loyalty/bobaguys-main.webp"}
      imageAlt={t(
        "solutions-loyalty.case-study-cards.cards.boba-guys.image-alt",
      )}
      text={
        <Trans
          i18nKey="solutions-loyalty.case-study-cards.cards.boba-guys.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t(
        "solutions-loyalty.case-study-cards.cards.boba-guys.button-text",
      )}
      buttonUrl="https://solana.com/news/case-study-boba-guys"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      key="boba-guys"
    />,
    <StoryCard
      logo={"/solutions/loyalty/asics-logo.svg"}
      logoAlt={t("solutions-loyalty.case-study-cards.cards.asics.logo-alt")}
      mobileImage={"/solutions/loyalty/asics-main.webp"}
      desktopImage={"/solutions/loyalty/asics-main.webp"}
      imageAlt={t("solutions-loyalty.case-study-cards.cards.asics.image-alt")}
      text={
        <Trans
          i18nKey="solutions-loyalty.case-study-cards.cards.asics.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t(
        "solutions-loyalty.case-study-cards.cards.asics.buttonText",
      )}
      buttonUrl="https://ui.asics.com/"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      key="asics"
    />,
    <StoryCard
      logo={"/solutions/loyalty/drip-logo.svg"}
      logoAlt={t("solutions-loyalty.case-study-cards.cards.drip.logo-alt")}
      mobileImage={"/solutions/loyalty/drip-main.jpg"}
      desktopImage={"/solutions/loyalty/drip-main.jpg"}
      imageAlt={t("solutions-loyalty.case-study-cards.cards.drip.image-alt")}
      text={
        <Trans
          i18nKey="solutions-loyalty.case-study-cards.cards.drip.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t("solutions-loyalty.case-study-cards.cards.drip.buttonText")}
      buttonUrl="https://blockworks.co/news/drip-haus-mass-adoption-strategy"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      key="drip"
    />,
    <StoryCard
      logo={"/solutions/loyalty/single-logo.png"}
      logoAlt={t(
        "solutions-loyalty.case-study-cards.cards.eric-church.logo-alt",
      )}
      mobileImage={"/solutions/loyalty/single-main.jpg"}
      desktopImage={"/solutions/loyalty/single-main.jpg"}
      imageAlt={t(
        "solutions-loyalty.case-study-cards.cards.eric-church.image-alt",
      )}
      text={
        <Trans
          i18nKey="solutions-loyalty.case-study-cards.cards.eric-church.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t(
        "solutions-loyalty.case-study-cards.cards.eric-church.buttonText",
      )}
      buttonUrl="https://single.xyz/blogs/blog/eric-church-future-proofs-fandom-solana-based-digital-deeds-nashville-bar"
      className={styles.StoryCard}
      logoClassName={styles.StoryCardLogo}
      key="eric-church"
    />,
  ];

  const developerResourcesLinks = [
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-one")}
      link="https://solana.com/docs/intro/quick-start"
      key="quick-start"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-two")}
      link="https://solana.com/docs/advanced/state-compression"
      key="state-compression"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-three")}
      link="https://solana.com/docs/advanced/actions"
      key="actions"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-four")}
      link="https://docs.solanapay.com/"
      key="solana-pay"
    />,
  ];

  return (
    <Layout>
      <HTMLHead
        title={t("solutions-loyalty.meta.title")}
        description={t("solutions-loyalty.meta.description")}
      />

      <div className={styles.LoyaltyPage} id="loyalty-page">
        <Stats
          titleContent={
            <Trans
              i18nKey="solutions-loyalty.stats.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%)" />
                ),
              }}
            />
          }
          subtitleKey={statsContent.subtitle}
          kickerKey={statsContent.finePrint}
          kickerUrl="https://solana.com/news/case-study-boba-guys"
          stats={statsContent.stats}
          className={styles.Stats}
          statsClassName={styles.StatsContent}
        />

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-loyalty.callout-1.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%);" />
                ),
              }}
            />
          }
          subtitleKey="solutions-loyalty.callout-1.subtitle"
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="right"
              titleComponent={longformContent[0].title}
              subtitleComponent={longformContent[0].text}
              className={styles.LongformItem1}
            />
          </MotionSlideIn>

          <MotionSlideIn>
            <LongformItem
              mediaComponent={<></>}
              textContentDesktopDirection="row"
              mediaDesktopPlacement="below"
              titleComponent={longformContent[1].title}
              subtitleComponent={longformContent[1].text}
              className={styles.LongformItem2}
            />
          </MotionSlideIn>

          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="left"
              titleComponent={longformContent[2].title}
              subtitleComponent={longformContent[2].text}
              className={styles.LongformItem3}
            />
          </MotionSlideIn>

          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="right"
              titleComponent={longformContent[3].title}
              subtitleComponent={longformContent[3].text}
              className={styles.LongformItem4}
            />
          </MotionSlideIn>
        </div>

        <div id="success-stories">
          <SuccessStories
            title={t("solutions-loyalty.case-study-cards.title")}
            cards={caseStudyCards}
            className={classNames(styles.SuccessStories, "d-md-none")}
            id="success-stories-mobile"
          />

          <CardsSlider
            items={caseStudyCards}
            titleKey="solutions-loyalty.case-study-cards.title"
            className={classNames(styles.SuccessStories, "d-none d-md-block")}
          />
        </div>

        <YDeveloperResources
          id="loyalty developer resources"
          title={t("solutions-loyalty.developerResources.title")}
          subtitle={t("solutions-loyalty.developerResources.text")}
          links={developerResourcesLinks}
        />

        <FooterCallout
          title={t("solutions-loyalty.footerCallout.title")}
          text={t("solutions-loyalty.footerCallout.text")}
          btnText={t("solutions-loyalty.footerCallout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t("solutions-loyalty.footerCallout.btnLarge")}
          btnLargeUrl="bd-payments-commerce@solana.org"
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

export default Loyalty;
