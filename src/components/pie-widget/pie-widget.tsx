import { forwardRef } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

import { PieWidgetProps } from "@app/components/pie-widget/types.ts";

export const PieWidget = forwardRef<HTMLDivElement, PieWidgetProps>(
  ({ data, width = 200, height = 100, pieProps, centerText }, ref) => {
    return (
      <div ref={ref}>
        <PieChart width={width} height={height}>
          <Pie
            textAnchor={"middle"}
            cy={80}
            data={data}
            startAngle={0}
            endAngle={180}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={-10}
            cornerRadius={40}
            dataKey="value"
            {...pieProps}
          >
            {centerText && (
              <Label
                position="center"
                value={centerText}
                style={{
                  fontSize: "20px",
                  fill: "#123456",
                  fontWeight: 600,
                  textAlign: "center",
                  transform: "translate(0, -20px)",
                }}
              />
            )}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  },
);
