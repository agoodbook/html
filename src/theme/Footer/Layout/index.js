import React from "react";
import clsx from "clsx";
import Poetry from "@site/src/theme/Footer/Poetry";
import BrowserOnly from "@docusaurus/BrowserOnly";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
        <BrowserOnly>
          <Poetry />
        </BrowserOnly>
      </div>
    </footer>
  );
}
