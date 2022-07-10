import React, { memo } from "react";
import { Helmet } from "react-helmet";

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Оплата | Okshimel Shop</title>
      </Helmet>

      <h2 style={{ marginTop: 300, textAlign: "center" }}>Payment test</h2>
    </div>
  );
};

export default memo(Payment);
