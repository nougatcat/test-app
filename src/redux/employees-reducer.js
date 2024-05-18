

const SET_EMPLOYEES = "employeesPage/SET_EMPLOYEES"
const SET_TOTAL_USERS_COUNT = 'employeesPage/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'employeesPage/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'employeesPage/TOGGLE_IS_FOLLOWING_PROGRES';


let initialState = {
    employees: [],
    totalEmployeesCount: 0,
    isFetching: false
}

const employeesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: action.employees
            }
        }
        default:
            return state
    }
}

export default employeesReducer