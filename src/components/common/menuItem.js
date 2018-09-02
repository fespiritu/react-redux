import { constants } from "../../constants";
import React from "react";
//import * as Icon from "react-feather";

const MenuItem = props => {
  const { dataFeather, menuName, srOnly, currentSrOnly, isActiveLink } = props;
  console.log("props: ", props);
  return (
    <div>
      <a className={isActiveLink} href={constants.HREF}>
        {dataFeather}
        {"  "}
        {menuName} <span className={srOnly}>{currentSrOnly}</span>
      </a>
    </div>
  );
};

export default MenuItem;
