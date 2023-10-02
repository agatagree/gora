import { useTranslation } from "react-i18next";
import { Text } from "components/common/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.bannerTextlayout}>
      <Text variant="mainHeader" color="primary">
        {t("home-page.banner.title-1")}
        <br />
        {t("home-page.banner.title-2")}
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant="mainHeaderSubText" color="primary">
          {t("home-page.banner.subtitle")}
        </Text>
      </div>
    </div>
  );
};