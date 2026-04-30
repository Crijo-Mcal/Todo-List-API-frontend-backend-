import {forwardRef, type ButtonHTMLAttributes} from "react";
import {cn} from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant = "primary", size = "md", children, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "hover:bg-secondary text-foreground": variant === "ghost",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90":
              variant === "destructive",
            "border border-border bg-transparent hover:bg-secondary text-foreground":
              variant === "outline",
          },
          {
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-5 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export {Button};
