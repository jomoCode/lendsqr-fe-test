import React from "react";
import { LoginTemplate } from "./components/templates/LoginTemplate/LoginTemplate";
import { LoginLeft } from "./components/organisms/LoginLeft/LoginLeft";
import { LoginRight } from "./components/organisms/LoginRight/LoginRight";

function page() {
  return (
    <LoginTemplate
      left={<LoginLeft />}
      right={<LoginRight />}
    />
  );
}

export default page;
