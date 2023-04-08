import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { seriesApolloClient } from "@app/modules/series/pages/series/graphql/client";

const Series = (): ReactElement => (
    <ApolloProvider client={seriesApolloClient}>
        <div>Series</div>
    </ApolloProvider>
);

export { Series };