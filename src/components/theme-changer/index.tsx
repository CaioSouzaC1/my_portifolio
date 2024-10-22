import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const LightTheme = () => {
  return (
    <div>
      <Sun size={20} />
    </div>
  );
};

const DarkTheme = () => {
  return (
    <div>
      <Moon size={20} />
    </div>
  );
};

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed right-4 top-4 lg:right-8 lg:top-8 z-50">
      <Popover>
        <PopoverTrigger>
          <Button
            className="w-12 h-12 rounded-full border-foreground"
            size="sm"
            variant={"outline"}>
            {theme === "light" ? <LightTheme /> : <DarkTheme />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-3 max-w-16">
          <Button
            variant={"outline"}
            disabled={theme === "light"}
            className="w-full"
            onClick={() => setTheme("light")}>
            <LightTheme />
          </Button>
          <Button
            variant={"outline"}
            disabled={theme === "dark"}
            className="w-full"
            onClick={() => setTheme("dark")}>
            <DarkTheme />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
