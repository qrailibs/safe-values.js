// Check if value is set
export function isset(value) {
    return value != undefined || value != NaN
}

// Check if value is int/number
export function isint(value) {
    return isset(value) && typeof value == 'number'
}

// Check if value is string
export function isstring(value) {
    return isset(value) && typeof value == 'string'
}

// Check if value is bool
export function isbool(value) {
    return isset(value) && typeof value == 'boolean'
}

// Check if value is function
export function isfunc(value) {
    return isset(value) && {}.toString.call(value) === '[object Function]'
}

// Check if value is array
export function isarray(value) {
    return isset(value) && Array.isArray(value)
}

// Check if value is object (key/value dictionary)
export function isobj(value) {
    return isset(value) && value.constructor == Object
}

// Check if object has every field/key
export function objhas(object, values) {
    if(!isset(object) || !isset(values) || !isobj(object)) return false

    values.forEach(value => {
        if(!(value in object))
            return false
    })

    return true
}

// Check if value is enum value
export function isenum(value, enumValues) {
    return isset(value) && isset(enumValues) 
        && isarray(enumValues) && enumValues.includes(value)
}