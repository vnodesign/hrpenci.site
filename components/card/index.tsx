import cn from "clsx";
import Link from "next/link";

import * as styles from "./style.module.scss";

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  href,
  ...props
}) {
  const animatedArrow = arrow ? (
    <span
      className={cn(
        "transition-transform duration-75",
        "group-hover:translate-x-[2px]",
      )}
    >
      →
    </span>
  ) : null;

  if (image) {
    return (
      <Link
        href={href}
        className={cn(
          styles["card"],
          "group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none",
        )}
        {...props}
      >
        {children}
        <span className={cn(styles["card__title"], "gap-2 p-4")}>
          {icon}
          <span className="flex gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        styles["card"],
        "group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none",
      )}
      {...props}
    >
      <span
        className={cn(
          styles["card__title"],
          "gap-2 p-4 text-gray-700 dark:text-neutral-200",
        )}
      >
        {icon}
        {title}
        {animatedArrow}
      </span>
    </Link>
  );
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles["cards"], "mt-4 gap-4")}
      {...props}
      style={
        {
          "--rows": num || 3,
          ...props.style,
        } as any
      }
    >
      {children}
    </div>
  );
}