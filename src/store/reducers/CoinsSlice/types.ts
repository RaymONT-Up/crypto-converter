export interface TypesCoinsInitialState {
    isLoading: boolean,
    error: null | string,

    currentPage: number;
    perPage: number;
    total: number | null;

}
