import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultMutators = {
  setValue: ([field, value]: any, state: any, { changeValue }: any) => {
    changeValue(state, field, () => value)
  }
}
