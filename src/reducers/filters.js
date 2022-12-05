const initialState = {
    filtersLoadingStatus: 'idle',
    filters: [],
    currentFilter: 'all'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'HERO_FILTERED':
            return {
                ...state,
                currentFilter: action.payload
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        default: return state
    }
}

export default filters;