export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroAdded = (hero) => {
    return {
        type: 'HERO_ADDED',
        payload: hero
    }
}

export const heroFiltering = () => {
    return {
        type: 'HERO_FILTERING'
    }
}

export const heroFiltered = (filter) => {
    return {
        type: 'HERO_FILTERED',
        payload: filter
    }
}

export const heroFilteringError = () => {
    return {
        type: 'HERO_FILTERING_ERROR'
    }
}

export const heroDeleting = () => {
    return {
        type: 'HERO_DELETING'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const heroDeletingError = () => {
    return {
        type: 'HERO_DELETING_ERROR'
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR',
    }
}


