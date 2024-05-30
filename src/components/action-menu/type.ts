import { ReactNode } from "react";

export type ActionMenuProps = {
  actions: {
    label: string;
    icon: ReactNode;
    onClick: () => void;
  }[];
};
