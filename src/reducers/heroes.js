const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_ADDING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HERO_ADDED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
                
            }
        case 'HERO_ADDING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        case 'HERO_DELETING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
                
            }
        case 'HERO_FILTERING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HERO_FILTERING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        default: return state
    }
}

export default heroes;