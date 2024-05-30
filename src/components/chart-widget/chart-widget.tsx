import { forwardRef } from "react";
import clsx from "clsx";

import { ActionMenu } from "@app/components";
import { ChartWidgetProps } from "@app/components/chart-widget/types.ts";
import { Button, Flex, Paper, Stack, Text } from "@app/core-components";
import { Header } from "@app/core-components/header";
import { globalTheme } from "@app/global.css.ts";

import {
  content,
  footer,
  headerIconWrapper,
  headerWrapper,
} from "./chart-widget.css.ts";

export const ChartWidget = forwardRef<HTMLDivElement, ChartWidgetProps>(
  (
    {
      title,
      headerIcon,
      actions,
      children,
      contentTitle,
      contentText,
      footerActionButtons,
    },
    ref,
  ) => {
    const isContentShown = contentTitle || contentText;
    return (
      <Paper ref={ref} spacing={0} radius={"lg"}>
        <Stack gap={0}>
          <Flex justifyContent={"space-between"} className={headerWrapper}>
            <Flex alignItems={"center"} gap={16}>
              {headerIcon && (
                <div className={headerIconWrapper}>{headerIcon}</div>
              )}
              <Header variant={"h4"} weight={"500"}>
                {title}
              </Header>
            </Flex>
            {actions && <ActionMenu actions={actions} />}
          </Flex>
          <Stack className={clsx(content)} alignItems={"center"}>
            {children}
            {isContentShown && (
              <Stack gap={"sm"} alignItems={"center"}>
                {contentTitle && (
                  <Header variant={"h3"} align={"center"} weight={"500"}>
                    {contentTitle}
                  </Header>
                )}
                {contentText && (
                  <Text
                    color={globalTheme.palette.text.secondary}
                    size={"sm"}
                    align={"center"}
                  >
                    {contentText}
                  </Text>
                )}
              </Stack>
            )}
          </Stack>

          {footerActionButtons && (
            <Flex className={footer} justifyContent={"flex-end"}>
              {footerActionButtons?.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </Flex>
          )}
        </Stack>
      </Paper>
    );
  },
);
