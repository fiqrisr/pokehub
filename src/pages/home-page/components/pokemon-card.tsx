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
      shadow="sm"
      isPressable
      className="hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50 transition-all"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          width="100%"
          alt={`${name} image`}
          className="w-full h-full object-cover"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="text-md justify-center font-bold">
        {name}
      </CardFooter>
    </Card>
  );
};
