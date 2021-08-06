import React from "react";
import * as s from "./index.styles";

import Box from "../Box";

export default function Machine({ loaders, items }) {
  const symbols = ["🍒", "🍋", "🍊", "🍉"];

  const { item1, item2, item3 } = items;
  const { l1, l2, l3 } = loaders;

  return (
    <s.OuterContainer>
      <Box loading={l1} symbol={symbols[item1]} />
      <Box loading={l2} symbol={symbols[item2]} />
      <Box loading={l3} symbol={symbols[item3]} />
    </s.OuterContainer>
  );
}
