import axios from "axios"

export const employeesAPI = {
    getEmployees() {
        return axios.get(`https://raw.githubusercontent.com/nougatcat/foodata/main/emplyees.json`)
            .then(response => response.data)
    }
}