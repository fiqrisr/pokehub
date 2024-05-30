import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export type PokemonCardProps = {
  name: string;
  imageUrl: string;
};

export const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  name,
  imageUrl,
}) => {
  return (
    <Card
      shadow="none"
      isPressable
      disableRipple
      className="group overflow-visible bg-transparent hover:-translate-y-2 transition-all"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          removeWrapper
          shadow="none"
          width="100%"
          alt={`${name} image`}
          className="drop-shadow-violet dark:drop-shadow-violet-dark w-full h-full object-cover p-1"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="text-md justify-center font-bold">
        {name}
      </CardFooter>
    </Card>
  );
};
