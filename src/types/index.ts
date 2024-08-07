import { FC as FunctionalComponetn } from "react";

export type FC<T = object> = FunctionalComponetn<
  T & { children?: React.ReactNode }
>;

export interface User {
  id: number;
  name: string;
  email: string;
}

export type EcommerceName = "tokopedia" | "shopee";

export interface Shop {
  id: number;
  name: string;
  ecommerce: EcommerceName;
}

export interface Customer {
  id: number;
  name: string;
  shop: Shop;
}

export interface ChatSession {
  id: number;
  customer: Customer;
  createdAt: string;
  unreadMessage: number;
  lastMessage: Message;
}

export interface Message {
  id: number;
  message: string;
  isSent: boolean; // Indicates if the message is sent by the current user
  createdAt: string;
}

export type ChatSessionMenu = "all" | "read" | "unread";
