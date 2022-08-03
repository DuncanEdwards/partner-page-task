import data from "./partner-page-data.json";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";

export const PartnerPage = () => {
  return (
    <div>
      <HeaderSection {...data.headerSection} />
      <div>Main Section</div>
      <FooterSection {...data.footer} />
    </div>
  );
};
