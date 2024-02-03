import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export   const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#fuchsia' },
  hover: { scale: 1.1, backgroundColor: '#ff4081' },
};


export const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number
) => {
  const INPUT_RANGE = inputUpper - inputLower
  const OUTPUT_RANGE = outputUpper - outputLower

  return (value: number) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
}