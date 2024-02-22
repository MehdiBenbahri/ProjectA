import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface DefaultFrontContainer {
  children?: React.ReactNode;
  className?: string;
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
