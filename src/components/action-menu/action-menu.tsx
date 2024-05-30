import { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { ActionMenuProps } from "@app/components/action-menu/type.ts";

import { container, iconButton, lineItem } from "./action-menu.css.ts";

export const ActionMenu: FC<ActionMenuProps> = ({ actions }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={iconButton} aria-label="Actions">
          <DotsHorizontalIcon display="block" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={0} className={container}>
          {actions.map(({ label, onClick, icon }, index) => {
            return (
              <DropdownMenu.Item
                onClick={onClick}
                key={`action-${index}`}
                className={lineItem}
              >
                <div>{icon}</div> <div>{label}</div>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
