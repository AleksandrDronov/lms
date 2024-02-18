"use client";

import { Category } from "@prisma/client";
import React from "react";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import CategoryItem from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Engineering": FcEngineering,
  "Filming": FcFilmReel,
  "Music": FcMusic,
  "Computer Science": FcMultipleDevices,
  "Photography": FcOldTimeCamera,
  "Accounting": FcSalesPerformance,
  "Fitness": FcSportsMode,
};
export default function Categories({ items }: CategoriesProps) {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((category) => (
        <CategoryItem
          key={category.id}
          label={category.name}
          icon={iconMap[category.name]}
          value={category.id}
        />
      ))}
    </div>
  );
}
