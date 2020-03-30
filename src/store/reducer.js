const initialState = {
    date: parseInt((new Date()).getDate()),
    month: parseInt((new Date()).getMonth()),
    year: parseInt((new Date()).getFullYear())
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATE': {
            return {
                ...state,
                date: action.date
            }
        }
        case 'UPDATE_MONTH': {
            return {
                ...state,
                month: action.month
            }
        }
        case 'UPDATE_YEAR': {
            return {
                ...state,
                year: action.year
            }
        }
        default:
            return state
    }
}
export default reducer