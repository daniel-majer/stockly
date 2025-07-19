import React from "react";
import { LucideAlignJustify } from "lucide-react";
import { useAppDispatch } from "@/app/redux";
import { cn } from "@/lib/utils";
import { toggleSidebar } from "@/state";

type ExpandProps = {
  className?: string;
};

const ExpandButton = ({ className }: ExpandProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={cn(
        "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-500 hover:bg-gray-300",
        className,
      )}
      onClick={handleToggle}
    >
      <LucideAlignJustify size={16} />
    </div>
  );
};

export default ExpandButton;
