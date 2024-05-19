

export const find = (array, term = 'man') => {
    let filteredArray = [...array.filter(function (el) {
        for (let field in el) {
            if (el[field].indexOf(term) > -1) {
                return true;//если нашли хотя бы одно поле содержащее искомую строку, оставляем объект
            }
        }
        return false;
    })]
    return filteredArray
}

export const sortArrayByProp = (array, prop) => {
    const sortedArray = array.toSorted((a, b) =>  a[prop].localeCompare(b.fullname))
    return sortedArray
}

// {
//     sortEmployeesByFullName().map(emp => <Employee key={emp.id}
//         id={emp.id} fullname={emp.fullname}
//         email={emp.email} group={emp.group}/>)
// }