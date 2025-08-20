import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "A line chart showing sales and orders data"

const chartData = [
  { day: "Mon", sales: 4200, orders: 0 },
  { day: "Tue", sales: 5800, orders: 0 },
  { day: "Wed", sales: 7200, orders: 0 },
  { day: "Thu", sales: 6100, orders: 0 },
  { day: "Fri", sales: 8900, orders: 0 },
  { day: "Sat", sales: 12400, orders: 0 },
  { day: "Sun", sales: 9800, orders: 0 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#3b82f6", // Blue color
  },
  orders: {
    label: "Orders",
    color: "#10b981", // Green color
  },
} satisfies ChartConfig

export function ChartLineDots() {
  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">Sales Analytics</CardTitle>
        <CardDescription className="text-gray-500">Weekly performance overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#f1f5f9" 
                vertical={false} 
              />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => value}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <ChartTooltip
                cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                content={
                  <ChartTooltipContent
                    className="bg-white border border-gray-200 rounded-lg shadow-lg p-3"
                    labelFormatter={(value) => `${value}`}
                    formatter={(value, name) => [
                      name === 'sales' ? `$${value.toLocaleString()}` : `${value} orders`,
                      name === 'sales' ? 'Sales' : 'Orders'
                    ]}
                  />
                }
              />
              <Line
                dataKey="sales"
                type="monotone"
                stroke={chartConfig.sales.color}
                strokeWidth={3}
                dot={{
                  fill: chartConfig.sales.color,
                  strokeWidth: 0,
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  fill: chartConfig.sales.color,
                  strokeWidth: 2,
                  stroke: '#fff'
                }}
              />
              <Line
                dataKey="orders"
                type="monotone"
                stroke={chartConfig.orders.color}
                strokeWidth={3}
                dot={{
                  fill: chartConfig.orders.color,
                  strokeWidth: 0,
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  fill: chartConfig.orders.color,
                  strokeWidth: 2,
                  stroke: '#fff'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-gray-800">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-gray-500 leading-none">
          Showing sales and order trends for the past week
        </div>
      </CardFooter>
    </Card>
  )
}