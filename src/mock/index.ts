import { ChatSession, ChatSessionMenu, Message, Shop, User } from "../types";
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

export const getChatSession = (status: ChatSessionMenu): ChatSession[] => {
  if ((status = "all")) return chatSessionList;
  if ((status = "unread"))
    return chatSessionList.filter((item) => item.unreadMessage > 0);
  return chatSessionList.filter((item) => item.unreadMessage === 0);
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
      isSent: true,
      createdAt: getDateMinusMinutes(0),
    },
  ];
};
