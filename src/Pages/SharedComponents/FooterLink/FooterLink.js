import React from "react";

const FooterLink = (props) => {
  const { title, link1, link2, link3, link4, link5, link6 } = props.footerLinks;
  return (
    <div>
      <div className="underline underline-offset-[12px] text-pink-700">
        <h2 className="text-xl text-[#0E1C36] font-semibold">{title}</h2>
      </div>
      <div className=""></div>
    </div>
  );
};

export default FooterLink;
