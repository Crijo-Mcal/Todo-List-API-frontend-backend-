import {forwardRef, type HTMLAttributes} from "react";
import {cn} from "../../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-6 shadow-sm",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 pb-6", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-6", className)}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};
