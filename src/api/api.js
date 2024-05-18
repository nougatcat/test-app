import axios from "axios"

const BY_ID = "sort/BY_ID"
const BY_ID_REVERSED = "sort/BY_ID_REVERSED"
const BY_FULLNAME = "sort/BY_FULLNAME"
const BY_FULLNAME_REVERSED = "sort/BY_FULLNAME_REVERSED"
const BY_POSITION = "sort/BY_POSITION"


// export const getEmployees = (order = BY_ID) => {
//     return axios.get(`https://raw.githubusercontent.com/nougatcat/foodata/main/emplyees.json`)
//         .then(response => response.data)
// }


export const getEmployees = (order = BY_ID) => { //внутри прописать все реализации сортировок
    switch (order) {
        case BY_ID: {
            return axios.get(`https://raw.githubusercontent.com/nougatcat/foodata/main/emplyees.json`)
                .then(response => response.data)
        }
        case BY_ID_REVERSED: {
            return []
        }
        case BY_FULLNAME: {
            return []
        }
        case BY_FULLNAME_REVERSED: {
            return []
        }
        case BY_POSITION: {
            return []
        }
        default:
            return axios.get(`https://raw.githubusercontent.com/nougatcat/foodata/main/emplyees.json`)
                .then(response => response.data)
    }
}