

export const find = (array, term = 'man') => {
    let numberTerm = Number(term)
    let filteredArray = array.filter(function (el) {
        for (let prop in el) { //разделение на два варианта, потому что могу применить indexOf только к строковому типу
            if (prop !== 'id') {
                if (el[prop].indexOf(term) > -1) {
                    return true //если нашли хотя бы одно поле содержащее искомую строку, оставляем объект
                }
            } else if (prop === 'id' && numberTerm) {
                if (el[prop] === numberTerm) return true
            }
        }
        return false
    })
    return filteredArray
}

export const sortArrayByProp = (array, prop) => {
    if (prop === 'fullname') {
        const sortedArray = array.toSorted((a, b) => a[prop].localeCompare(b[prop]))
        return sortedArray
    } else if (prop === 'id') {
        const sortedArray = array.toSorted((a, b) => a[prop] - b[prop])
        return sortedArray
    }
    return array
}
