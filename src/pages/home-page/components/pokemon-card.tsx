import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
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

  return (
    <Card
      shadow="none"
      isPressable
      disableRipple
      className="overflow-visible bg-transparent hover:-translate-y-2 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBody className="overflow-visible p-0">
        <img
          width="100%"
          alt={`${name} image`}
          className="w-full h-full object-cover p-1 transition-all"
          style={
            isHovered
              ? {
                  filter: `drop-shadow(0 30px 30px rgba(${imageDropShadowColor[0]}, ${imageDropShadowColor[1]}, ${imageDropShadowColor[2]}, ${darkMode.value ? 0.55 : 1}))`,
                }
              : {
                  filter: `drop-shadow(0 30px 30px rgba(${imageDropShadowColor[0]}, ${imageDropShadowColor[1]}, ${imageDropShadowColor[2]}, ${darkMode.value ? 0.4 : 0.8}))`,
                }
          }
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="text-md justify-center font-bold">
        {name}
      </CardFooter>
    </Card>
  );
};
