import { ChatSession, ChatSessionFilter, Message, Shop, User } from "../types";
import { chatSessionList, messageList, shopList } from "./sampleData";

export function getDateMinusDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

export function getDateMinusMinutes(minutes: number) {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutes);
  return date.toISOString();
}

export function generateRandomId(): number {
  return Math.floor(Math.random() * 1000) + 1000;
}

export const login = (email: string, password: string): User | undefined => {
  if (password === "abc123") {
    const id = generateRandomId();
    return {
      id,
      email,
      name: `User ${id}`,
    };
  } else {
    return undefined;
  }
};

export const getShopList = (): Shop[] => {
  return shopList;
};

export const getChatSession = (filter: ChatSessionFilter): ChatSession[] => {
  if (filter.shopsId.length === 0) {
    return [];
  }

  return chatSessionList.filter((item) => {
    const shopIdMatch = filter.shopsId.includes(item.customer.shop.id);
    const nameMatch = item.customer.name
      .toLowerCase()
      .includes(filter.customerName.toLowerCase());

    return shopIdMatch && nameMatch;
  });
};

export const getChatSessionById = (id: string): ChatSession | undefined => {
  return chatSessionList.find((item) => item.id === parseInt(id));
};

export const getMessage = (): Message[] => {
  return messageList;
};

export const sentMessage = (
  message: string,
  prevMessageList: Message[]
): Message[] => {
  return [
    ...prevMessageList,
    {
      id: generateRandomId(),
      message,
      isIncomingChat: false,
      createdAt: getDateMinusMinutes(0),
    },
  ];
};
