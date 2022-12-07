import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtersLoadingStatus: 'idle',
    filters: [],
    currentFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        heroFiltered: (state, action) => {
            state.currentFilter = action.payload;
        },
        filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
        filtersFetched: (state, action) => {
            state.filters = action.payload;
            state.filtersLoadingStatus = 'idle';
        },
        filtersFetchingError: state => {state.filtersLoadingStatus = 'error'}
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    heroFiltered,
    filtersFetching,
    filtersFetched,
    filtersFetchingError
} = actions;