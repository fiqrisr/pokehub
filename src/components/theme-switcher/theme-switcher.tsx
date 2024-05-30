import { Switch } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import { USE_DARK_MODE_INITIAL_CONFIG } from "@/configs";
import { MoonIcon, SunIcon } from "@/icons";

export const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false, USE_DARK_MODE_INITIAL_CONFIG);

  return (
    <Switch
      size="lg"
      color="secondary"
      isSelected={darkMode.value}
      onValueChange={() => darkMode.toggle()}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    />
  );
};
