import { useState } from "react";
import { useTranslation } from "next-i18next";
import { walletFiltersData } from "../../../data/wallets/wallet-filters";

import WalletFilters from "./WalletFilters";
import { OpacityInText } from "@/components/shared/Text";

import styles from "./WalletsLayout.module.scss";

const WalletsLayout = ({ walletData }) => {
  const { t } = useTranslation();

  const [filters, setFilters] = useState({});
  const [wallets, setWallets] = useState(walletData);

  const updateWalletsBasedOnFilters = (filters) => {
    if (Object.keys(filters).length !== 0) {
      // Only return wallets that match every key/value pair inside the filters object
      const updatedWallets = walletData.filter((obj) =>
        Object.keys(filters).every((key) => obj[key] === filters[key]),
      );

      setWallets(updatedWallets);
    } else {
      setWallets(walletData);
    }
  };

  return (
    <div className={styles.WalletLayout}>
      <section className={styles.Hero}>
        <div className={styles.HeroContainer}>
          <div className={styles.TextWrapper}>
            <OpacityInText element="h2" as="heading">
              {t("solutions-wallets-explorer.hero.title")}
            </OpacityInText>

            <OpacityInText element="p" as="paragraph" delayIndex={1}>
              {t("solutions-wallets-explorer.hero.text")}
            </OpacityInText>
          </div>
        </div>
      </section>

      <WalletFilters
        filterData={walletFiltersData}
        currentFilters={filters}
        setFilters={setFilters}
        updateWallets={updateWalletsBasedOnFilters}
        walletData={wallets}
      />
    </div>
  );
};

export default WalletsLayout;
