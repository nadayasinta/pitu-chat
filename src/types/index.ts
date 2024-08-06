import { FC as FunctionalComponetn } from "react";

export type FC<T = object> = FunctionalComponetn<
  T & { children?: React.ReactNode }
>;

export interface User {
  id: number;
  email: string;
  name: string;
}

type EcommerceName = "tokopedia" | "shopee";

export interface Shop {
  id: number;
  name: string;
  ecommerce: EcommerceName;
}
