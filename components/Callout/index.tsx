import { ReactElement, ReactNode } from "react";
import cn from "clsx";
import { InformationCircleIcon } from "nextra/icons";

const TypeToEmoji = {
  default: "💡",
  error: "🚫",
  info: <InformationCircleIcon className="mt-1" />,
  warning: "⚠️",
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
  default: cn(
    "bg-orange-100 border-orange-500 text-orange-700 dark:bg-orange-200 dark:text-orange-800",
  ),
  error: cn(
    "bg-red-100 border-red-500 text-red-700 dark:bg-red-200 dark:text-red-800",
  ),
  info: cn(
    "bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
  ),
  warning: cn(
    "bg-yellow-100 border-yellow-500 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
  ),
};

type CalloutProps = {
  type?: CalloutType;
  emoji?: string | ReactElement;
  children: ReactNode;
};

export function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type],
}: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        "my-4 mx-0 border-l-[.5rem] pt-4 pb-2 px-6 rounded-lg",
        classes[type],
      )}
    >
      <div className="flex m-0 text-base font-semibold">{emoji}</div>
      <p>{children}</p>
    </div>
  );
}
