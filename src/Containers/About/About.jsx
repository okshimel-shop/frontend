import React, { memo } from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Про нас | Okshimel Shop</title>
      </Helmet>

      <h2 style={{ marginTop: 300, textAlign: "center" }}>About test</h2>
    </div>
  );
};

export default memo(About);
