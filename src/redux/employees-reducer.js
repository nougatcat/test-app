import { getEmployees } from "../api/api"
import { find, sortArrayByProp } from "../utilities/utilities"


const SET_EMPLOYEES = "employeesPage/SET_EMPLOYEES"
const SET_DESIGN = "employeesPage/SET_DESIGN"


let initialState = {
    employees: [],
    //? пример того, что содержится в json
    // employees: [
    //     {
    //         "id": 1,
    //         "fullname": "Debug debug",
    //         "group": "managers",
    //         "email": "john.smith@example.com"
    //     },
    //     {
    //         "id": 2,
    //         "fullname": "example example",
    //         "group": "HR",
    //         "email": "jane.johnson@example.com"
    //     }
    // ]
    design: 'table'
}

const employeesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: action.employees
            }
        }
        case SET_DESIGN: {
            return {
                ...state,
                design: action.design
            }
        }
        default:
            return state
    }
}

//?Action creator
const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
export const setDesign = (design) => ({type: SET_DESIGN, design})
//?Thunk creator
export const requestEmployees = (term = '', sort='') => async (dispatch) => {
    let data = await getEmployees()
    if (term !== '') {
        data = find(data,term)
    }
    if (sort !== '') {
        data = sortArrayByProp(data,sort)
    }
    dispatch(setEmployees(data));
    
    console.log('Debug: requesting employees')
}

export default employeesReducer