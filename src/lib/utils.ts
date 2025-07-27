import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSSのクラス名を効率的に結合するユーティリティ関数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 使用例:
// cn('px-4 py-2', 'bg-blue-500', isActive && 'bg-blue-700')
// cn('text-sm text-gray-500', className) // propsのclassNameと結合
