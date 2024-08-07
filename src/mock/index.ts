import { Shop } from "../types";

const shopList: Shop[] = [
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 3,
    name: "Beauty Shop",
    ecommerce: "tokopedia",
  },
];

export const getShopList = (): Shop[] => {
  return shopList;
};
