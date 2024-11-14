import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...rest) {
    return twMerge(clsx(...rest));
}
