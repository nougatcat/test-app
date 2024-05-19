import { getEmployees } from "../api/api"


const SET_EMPLOYEES = "employeesPage/SET_EMPLOYEES"


let initialState = {
    employees: []
    //? пример того, что содержится в json
    // employees: [
    //     {
    //         "id": "1",
    //         "fullname": "Debug debug",
    //         "group": "managers",
    //         "email": "john.smith@example.com"
    //     },
    //     {
    //         "id": "2",
    //         "fullname": "example example",
    //         "group": "HR",
    //         "email": "jane.johnson@example.com"
    //     }
    // ]
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

//?Action creator
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
//?Thunk creator
export const requestEmployees = () => async (dispatch) => {
    const data = await getEmployees()
    
    dispatch(setEmployees(data));
    console.log('Debug: requesting employees')
}

export default employeesReducer