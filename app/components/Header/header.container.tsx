import { use } from "react";
import { HeaderTop, HeaderCenter, HeaderBotton } from "./components";
import { getCategory } from "./services/categories.services";

function HeaderContainer() {
  const Category = use(getCategory());
  return (
    <div
      className="fixed top-0 left-0 w-full bg-bluet z-20"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      <HeaderTop />
      <HeaderCenter />
      <HeaderBotton props={Category} />
    </div>
  );
}

export default HeaderContainer;
