import axios from "axios"
import localEmployees from '../api/emplyees.json'

export const getEmployees = () => {
    return axios.get(`https://raw.githubusercontent.com/nougatcat/foodata/main/emplyees.json`)
        .then(response => response.data)
        .catch(() => {
            console.log('Удаленный сервер недоступен. Загружаю данные из локального хранилища')
            return localEmployees
        })
}
