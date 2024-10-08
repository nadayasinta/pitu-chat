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
    name: "Catina Jennet Norman Willoughby",
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
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(40),
  },
  {
    id: 4002,
    message: "Apakah untuk produk nomer 007 stoknya masih tersedia?",
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(40),
  },
  {
    id: 4003,
    message:
      "Halo! Terima kasih telah menghubungi kami. Untuk produk nomer 007, stoknya masih tersedia. Anda bisa langsung melakukan pembelian melalui halaman produk.",
    isIncomingChat: false,
    createdAt: getDateMinusMinutes(39),
  },
  {
    id: 4004,
    message:
      "Terima kasih atas informasinya. Apakah ada diskon atau promo untuk produk ini?",
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(20),
  },
  {
    id: 4005,
    message:
      "Saat ini, kami sedang menawarkan diskon 10% untuk pembelian di atas Rp500.000. Anda bisa memasukkan kode promo DISKON10 saat checkout untuk mendapatkan diskonnya.",
    isIncomingChat: false,
    createdAt: getDateMinusMinutes(20),
  },
  {
    id: 4006,
    message:
      "Baik, kalau begitu saya akan memesan untuk 3 produk agar mendapatkan diskonnya",
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(1),
  },
  {
    id: 4007,
    message: "Terima kasih banyak info diskonnya",
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(1),
  },
  {
    id: 4008,
    message: "Apa bisa dikirim sore ini?",
    isIncomingChat: true,
    createdAt: getDateMinusMinutes(0),
  },
];

export const chatSessionList: ChatSession[] = [
  {
    id: 3001,
    customer: customerList[0],
    createdAt: getDateMinusDays(0),
    unrepliedMessageCount: 3,
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
      isIncomingChat: true,
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
      isIncomingChat: false,
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
      isIncomingChat: true,
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
      isIncomingChat: true,
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
      isIncomingChat: true,
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
      isIncomingChat: false,
      createdAt: getDateMinusDays(14),
    },
  },
];
