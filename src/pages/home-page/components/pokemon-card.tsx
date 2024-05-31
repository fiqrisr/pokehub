import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { useCallback, useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

import { getImageDominantColor } from "@/utils";

export type PokemonCardProps = {
  name: string;
  imageUrl: string;
};

export const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  name,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const darkMode = useDarkMode();
  const [imageDropShadowColor, setImageDropShadowColor] = useState<
    [number, number, number]
  >([0, 0, 0]);

  useEffect(() => {
    (async () => {
      if (imageUrl) {
        const dominantColor = await getImageDominantColor(imageUrl);

        if (dominantColor) {
          const [r, g, b] = dominantColor.value;
          setImageDropShadowColor([r, g, b]);
        }
      }
    })();
  }, [imageUrl]);

  const dominantPokemonColor = useCallback(
    (lightModeAlpha: number, darkModeAlpha: number) => {
      if (imageDropShadowColor) {
        return `rgba(${imageDropShadowColor[0]}, ${imageDropShadowColor[1]}, ${imageDropShadowColor[2]}, ${darkMode.value ? darkModeAlpha : lightModeAlpha})`;
      }
    },
    [imageDropShadowColor, darkMode.value],
  );

  return (
    <Card
      isPressable
      isFooterBlurred
      disableRipple
      className="overflow-visible hover:-translate-y-2 transition-all border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? `0 27px 50px -12px ${dominantPokemonColor(0.7, 0.4)}`
          : "none",
        borderColor: isHovered
          ? dominantPokemonColor(1, 0.7)
          : dominantPokemonColor(0.5, 0.4),
      }}
    >
      <CardBody className="overflow-visible p-0">
        <img
          width="100%"
          alt={`${name} image`}
          className="w-full h-full object-cover p-2 mt-2 transition-all"
          style={{
            filter: isHovered
              ? `drop-shadow(0 10px 20px ${dominantPokemonColor(1, 0.55)})`
              : `drop-shadow(0 10px 30px ${dominantPokemonColor(0.8, 0.4)})`,
          }}
          src={imageUrl}
        />
      </CardBody>
      <CardFooter
        className="text-md justify-center font-bold mt-4 transition-all"
        style={{
          textTransform: "capitalize",
          backgroundColor: isHovered
            ? dominantPokemonColor(0.6, 0.7)
            : dominantPokemonColor(0.4, 0.4),
        }}
      >
        {name}
      </CardFooter>
    </Card>
  );
};
