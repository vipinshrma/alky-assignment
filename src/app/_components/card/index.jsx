"use client";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function InfoCard({ heading, title, bgImage = '' }) {
  return (
    (<div className="w-[700]">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-start p-4 border border-transparent dark:border-neutral-800",
          "bg-cover h-[600px] rounded-3xl",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="text relative z-50 mt-20 px-20">
          <Badge variant="black" className='text-base' >{heading}</Badge>
          <p className=" font-semibold text-2xl text-gray-50 relative my-4">
            {title}
          </p>
        </div>
      </div>
    </div>)
  );
}

