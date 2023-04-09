import { ReactElement } from "react";

import { PokemonListCardLoader } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard/components/PokemonListCardLoader";

const PokemonCardListLoader = (): ReactElement => (
    <>
        {Array.from({ length: 4 }).map(() => (
            <PokemonListCardLoader key={`pokemon-card-list-loader-${new Date().getTime()}`} />
        ))}
    </>
);

export { PokemonCardListLoader };