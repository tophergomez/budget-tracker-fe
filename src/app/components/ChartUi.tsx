"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2025-06-01", seabank:444, gcash: 222, maya: 150 },
  { date: "2025-06-02", seabank:444, gcash: 97,  maya: 180 },
  { date: "2025-06-03", seabank:444, gcash: 167, maya: 120 },
  { date: "2025-06-04", seabank:444, gcash: 242, maya: 260 },
  { date: "2025-06-05", seabank:444, gcash: 373, maya: 290 },
  { date: "2025-06-06", seabank:444, gcash: 301, maya: 340 },
  { date: "2025-06-07", seabank:444, gcash: 245, maya: 180 },
  { date: "2025-06-08", seabank:444, gcash: 409, maya: 320 },
  { date: "2025-06-09", seabank:444, gcash: 59,  maya: 110 },
  { date: "2025-06-10", seabank:444, gcash: 261, maya: 190 },
  { date: "2025-06-11", seabank:444, gcash: 327, maya: 350 },
  { date: "2025-06-12", seabank:444, gcash: 292, maya: 210 },
  { date: "2025-06-13", seabank:444, gcash: 342, maya: 380 },
  { date: "2025-06-14", seabank:444, gcash: 137, maya: 220 },
  { date: "2025-06-15", seabank:444, gcash: 120, maya: 170 },
  { date: "2025-06-16", seabank:444, gcash: 138, maya: 190 },
  { date: "2025-06-17", seabank:444, gcash: 446, maya: 360 },
  { date: "2025-06-18", seabank:444, gcash: 364, maya: 410 },
  { date: "2025-06-19", seabank:444, gcash: 243, maya: 180 },
  { date: "2025-06-20", seabank:444, gcash: 89,  maya: 150 },
  { date: "2025-06-21", seabank:444, gcash: 137, maya: 200 },
  { date: "2025-06-22", seabank:444, gcash: 224, maya: 170 },
  { date: "2025-06-23", seabank:444, gcash: 138, maya: 230 },
  { date: "2025-06-24", seabank:444, gcash: 387, maya: 290 },
  { date: "2025-06-25", seabank:444, gcash: 215, maya: 250 },
  { date: "2025-06-26", seabank:444, gcash: 75,  maya: 130 },
  { date: "2025-05-27", seabank:444, gcash: 383, maya: 700 },
  { date: "2025-05-28", seabank:444, gcash: 122, maya: 180 },
  { date: "2025-05-29", seabank:444, gcash: 315, maya: 240 },
  { date: "2025-05-30", seabank:444, gcash: 454, maya: 380 },
  { date: "2025-05-01", seabank:444, gcash: 165, maya: 220 },
  { date: "2025-05-02", seabank:444, gcash: 293, maya: 310 },
  { date: "2025-05-03", seabank:444, gcash: 247, maya: 190 },
  { date: "2025-05-04", seabank:444, gcash: 385, maya: 420 },
  { date: "2025-05-05", seabank:444, gcash: 481, maya: 390 },
  { date: "2025-05-06", seabank:444, gcash: 498, maya: 520 },
  { date: "2025-05-07", seabank:444, gcash: 388, maya: 300 },
  { date: "2025-05-08", seabank:444, gcash: 149, maya: 210 },
  { date: "2025-05-09", seabank:444, gcash: 227, maya: 180 },
  { date: "2025-05-10", seabank:444, gcash: 293, maya: 330 },
  { date: "2025-05-11", seabank:444, gcash: 335, maya: 270 },
  { date: "2025-05-12", seabank:444, gcash: 197, maya: 240 },
  { date: "2025-05-13", seabank:444, gcash: 197, maya: 160 },
  { date: "2025-05-14", seabank:444, gcash: 448, maya: 490 },
  { date: "2025-05-15", seabank:444, gcash: 473, maya: 380 },
  { date: "2025-05-16", seabank:444, gcash: 338, maya: 400 },
  { date: "2025-05-17", seabank:444, gcash: 499, maya: 420 },
  { date: "2025-05-18", seabank:444, gcash: 315, maya: 350 },
  { date: "2025-05-19", seabank:444, gcash: 235, maya: 180 },
  { date: "2025-05-20", seabank:444, gcash: 177, maya: 230 },
  { date: "2025-05-21", seabank:444, gcash: 82, maya: 140 },
  { date: "2025-08-22", seabank:444, gcash: 81, maya: 120 },
  { date: "2025-08-23", seabank:444, gcash: 252, maya: 290 },
  { date: "2025-08-24", seabank:444, gcash: 294, maya: 220 },
  { date: "2025-08-25", seabank:444, gcash: 201, maya: 250 },
  { date: "2025-08-26", seabank:444, gcash: 213, maya: 170 },
  { date: "2025-08-01", seabank:444, gcash: 420, maya: 460 },
  { date: "2025-08-02", seabank:444, gcash: 233, maya: 190 },
  { date: "2025-08-03", seabank:444, gcash: 78, maya: 130 },
  { date: "2025-08-04", seabank:444, gcash: 340, maya: 280 },
  { date: "2025-08-05", seabank:444, gcash: 178, maya: 230 },
  { date: "2025-08-06", seabank:444, gcash: 294, maya: 250 },
  { date: "2025-08-07", seabank:444, gcash: 323, maya: 370 },
  { date: "2025-08-08", seabank:444, gcash: 385, maya: 320 },
  { date: "2025-08-09", seabank:444, gcash: 438, maya: 480 },
  { date: "2025-08-10", seabank:444, gcash: 155, maya: 200 },
  { date: "2025-08-11", seabank:444, gcash: 92, maya: 150 },
]

const chartConfig = {
  mode: {
    label: "Mode",
  },
  gcash: {
    label: 'Gcash',
    color: '#035efc',
  },
  maya: {
    label: 'Maya',
    color: '#03fc62',
  },
  seabank: {
    label: 'Seabank',
    color: 'orange',
  },
} satisfies ChartConfig

export function ChartUi() {
  const [timeRange, setTimeRange] = React.useState("365d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-08-11")
    let daysToSubtract = 365
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (  
    <>
    <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Spending Habits</CardTitle>
          <CardDescription>
            Showing Spending Pattern
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
            >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="365d" className="rounded-lg">
              1 Year
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillGcash" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gcash)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gcash)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMaya" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-maya)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-maya)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSeabank" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-seabank)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-seabank)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="maya"
              type="natural"
              fill="url(#fillMaya)"
              stroke="var(--color-maya)"
              stackId="a"
            />
            <Area
              dataKey="seabank"
              type="natural"
              fill="url(#fillSeabank)"
              stroke="var(--color-seabank)"
              stackId="a"
            />
            <Area
              dataKey="gcash"
              type="natural"
              fill="url(#fillGcash)"
              stroke="var(--color-gcash)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </>
  )
}
