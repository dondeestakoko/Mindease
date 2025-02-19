"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { Smile, Meh, Frown, ThumbsUp, ThumbsDown } from "lucide-react";

// Define the icons array
let icons = [
  <ThumbsDown key="0" className="w-5 h-5 text-red-500" />,
  <Frown key="1" className="w-5 h-5 text-orange-500" />,
  <Meh key="2" className="w-5 h-5 text-yellow-500" />,
  <Smile key="3" className="w-5 h-5 text-green-500" />,
  <ThumbsUp key="4" className="w-5 h-5 text-blue-500" />,
];

// Function to get the appropriate emoji based on the slider value
const getEmoji = (value: number) => {
  if (value <= 2) return icons[0];
  if (value <= 4) return icons[1];
  if (value <= 6) return icons[2];
  if (value <= 8) return icons[3];
  return icons[4];
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [value, setValue] = React.useState(5); // Initial value

  return (
    <div className="flex items-center space-x-4">
      {/* Slider */}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
        value={[value]}
        onValueChange={(val) => setValue(val[0])}
        min={0}
        max={10}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-gray-200 to-gray-600 bg-opacity-30 backdrop-blur-md shadow-inner">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-gray-500 to-gray-900 transition-all duration-300" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-gray-700 bg-gray-300 shadow-lg ring-offset-background transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>

      {/* Display Emoji and Number to the right of the slider */}
      <div className="flex flex-col items-center">
        {/* Emoji */}
        <div className="text-lg font-medium transition-all duration-300">
          {getEmoji(value)}
        </div>
        {/* Current Value */}
        <div className="text-sm font-semibold text-gray-700 transition-all duration-300">
          {value}
        </div>
      </div>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };