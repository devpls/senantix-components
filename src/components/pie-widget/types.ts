import { Props } from "recharts/types/polar/Pie";

export type PieWidgetProps = {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  width?: number;
  height?: number;
  pieProps?: Partial<Omit<Props, "ref">>;
  centerText?: string;
};
