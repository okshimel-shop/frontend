import React, { memo } from "react";
import { Helmet } from "react-helmet";

const Delivery = () => {
  return (
    <div>
      <Helmet>
        <title>Доставка | Okshimel Shop</title>
      </Helmet>

      <h2 style={{ marginTop: 300, textAlign: "center" }}>Delivery test</h2>
    </div>
  );
};

export default memo(Delivery);
