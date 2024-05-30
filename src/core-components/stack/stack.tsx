import { forwardRef } from "react";
import clsx from "clsx";

import { Flex } from "../flex";

import { StackProps } from "./types";

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      alignItems = "stretch",
      justifyContent = "center",
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <Flex
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        ref={ref}
        className={clsx(className)}
        {...rest}
      >
        {children}
      </Flex>
    );
  },
);
