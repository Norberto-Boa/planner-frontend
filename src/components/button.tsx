import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode,
}

const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-lg px-5 py-2 font-medium transition-all justify-center',
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200 border border-zinc-800 hover:bg-zinc-700 hover:border hover:border-zinc-200"
    },
    size: {
      default: "py-2",
      full: "w-full h-11"
    }
  },

  defaultVariants: {
    variant: "primary"
  }
});

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}