import React, { memo } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Контакти | Okshimel Shop</title>
      </Helmet>

      <h2 style={{ marginTop: 300, textAlign: "center" }}>Contact test</h2>
    </div>
  );
};

export default memo(Contact);
