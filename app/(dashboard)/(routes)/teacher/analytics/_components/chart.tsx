"use client";

import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export default function Chart({ data }: ChartProps) {
  return (
    <Card className="pt-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => formatPrice(value)}
          />
          <Bar dataKey="total" fill="#0369a1" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
