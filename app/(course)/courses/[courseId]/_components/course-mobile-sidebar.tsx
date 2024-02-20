import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CourseSidebar from "./course-sidebar";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export default function CourseMobileSidebar({
  course,
  progressCount,
}: CourseSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-70 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 bg-white w-72" side="left">
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  );
}
