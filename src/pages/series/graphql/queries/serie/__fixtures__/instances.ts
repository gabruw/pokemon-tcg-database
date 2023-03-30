import {
    serieQueryErrorMock,
    serieQueryReturnMock,
    serieQueryVariablesMock,
} from "@app/pages/series/graphql/queries/serie/__fixtures__/constants";
import { createSerieQueryMock } from "@app/pages/series/graphql/queries/serie/__fixtures__/query";

export const mockSetQuerySuccess = createSerieQueryMock({
    data: serieQueryReturnMock,
    variables: serieQueryVariablesMock,
});

export const mockSetQueryFailure = createSerieQueryMock({
    error: serieQueryErrorMock,
    variables: serieQueryVariablesMock,
});
