import { ChatSession, Customer, Message, Shop } from "../types";
import { getDateMinusDays, getDateMinusMinutes } from "./";

export const shopList: Shop[] = [
  {
    id: 2001,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2002,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 2003,
    name: "Beauty Shop Denpasar Official",
    ecommerce: "tokopedia",
  },
];

export const customerList: Customer[] = [
  {
    id: 2001,
    name: "Deen Welton",
    shop: shopList[0],
  },
  {
    id: 2002,
    name: "Mayrin Grow",
    shop: shopList[1],
  },
  {
    id: 2003,
    name: "Solana Tyner",
    shop: shopList[2],
  },
  {
    id: 2004,
    name: "Gabby Deming",
    shop: shopList[0],
  },
  {
    id: 2002,
    name: "Evy Spitzer",
    shop: shopList[1],
  },
  {
    id: 2003,
    name: "Isa Freund",
    shop: shopList[2],
  },
  {
    id: 2001,
    name: "Jonathan Bell",
    shop: shopList[0],
  },
];

export const messageList: Message[] = [
  {
    id: 4001,
    message: "Halo",
    isSent: false,
    createdAt: getDateMinusMinutes(40),
  },
  {
    id: 4002,
    message: "Apakah untuk produk nomer 007 stoknya masih tersedia?",
    isSent: false,
    createdAt: getDateMinusMinutes(40),
  },
  {
    id: 4003,
    message:
      "Halo! Terima kasih telah menghubungi kami. Untuk produk nomer 007, stoknya masih tersedia. Anda bisa langsung melakukan pembelian melalui halaman produk.",
    isSent: true,
    createdAt: getDateMinusMinutes(39),
  },
  {
    id: 4004,
    message:
      "Terima kasih atas informasinya. Apakah ada diskon atau promo untuk produk ini?",
    isSent: false,
    createdAt: getDateMinusMinutes(20),
  },
  {
    id: 4005,
    message:
      "Saat ini, kami sedang menawarkan diskon 10% untuk pembelian di atas Rp500.000. Anda bisa memasukkan kode promo DISKON10 saat checkout untuk mendapatkan diskonnya.",
    isSent: true,
    createdAt: getDateMinusMinutes(20),
  },
  {
    id: 4006,
    message:
      "Baik, kalau begitu saya akan memesan untuk 3 produk agar mendapatkan diskonnya",
    isSent: false,
    createdAt: getDateMinusMinutes(1),
  },
  {
    id: 4007,
    message: "   Terima kasih banyak infonya",
    isSent: false,
    createdAt: getDateMinusMinutes(0),
  },
];

export const chatSessionList: ChatSession[] = [
  {
    id: 3001,
    customer: customerList[0],
    createdAt: getDateMinusDays(0),
    unrepliedMessageCount: 2,
    lastMessage: messageList[messageList.length - 1],
  },
  {
    id: 3002,
    customer: customerList[1],
    createdAt: getDateMinusDays(0),
    unrepliedMessageCount: 5,
    lastMessage: {
      id: 4011,
      message:
        "Saya sudah melakukan pembayaran, tapi status pesanan saya masih Pending. Apakah bisa dibantu untuk mempercepat prosesnya?",
      isSent: false,
      createdAt: getDateMinusDays(0),
    },
  },
  {
    id: 3003,
    customer: customerList[2],
    createdAt: getDateMinusDays(0),
    unrepliedMessageCount: 0,
    lastMessage: {
      id: 4012,
      message:
        "Terima kasih telah menghubungi kami, pesanan anda sedang dalam persiapan",
      isSent: true,
      createdAt: getDateMinusDays(0),
    },
  },
  {
    id: 3004,
    customer: customerList[3],
    createdAt: getDateMinusDays(1),
    unrepliedMessageCount: 2,
    lastMessage: {
      id: 4013,
      message: "Ok",
      isSent: false,
      createdAt: getDateMinusDays(1),
    },
  },
  {
    id: 3005,
    customer: customerList[4],
    createdAt: getDateMinusDays(2),
    unrepliedMessageCount: 10,
    lastMessage: {
      id: 4014,
      message: "Terima kasih infonya :)",
      isSent: false,
      createdAt: getDateMinusDays(2),
    },
  },
  {
    id: 3006,
    customer: customerList[5],
    createdAt: getDateMinusDays(5),
    unrepliedMessageCount: 1,
    lastMessage: {
      id: 4015,
      message:
        "Apakah saya akan mendapatkan nomor resi untuk melacak pengirimannya?",
      isSent: false,
      createdAt: getDateMinusDays(5),
    },
  },
  {
    id: 3007,
    customer: customerList[6],
    createdAt: getDateMinusDays(14),
    unrepliedMessageCount: 0,
    lastMessage: {
      id: 4016,
      message: "Sama-sama. Jika ada kendala silahkan menghubungi kami lagi.",
      isSent: true,
      createdAt: getDateMinusDays(14),
    },
  },
];
