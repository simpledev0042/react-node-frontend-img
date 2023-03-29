import { CHANGE_MAIN_VALUE, ADD_FIELD, REMOVE_FIELD } from "./actionType"

export const changeMainInput = (key, value) => {
    return {
        type: CHANGE_MAIN_VALUE,
        key: key,
        value: value
    }
} 

export const addField = (fieldName, fieldType, fieldValue) => {
    return {
        type: ADD_FIELD,
        fieldName: fieldName,
        fieldValue: fieldValue,
        fieldType: fieldType
    }
} 

export const removeField = (fieldName) => {
    return {
        type: REMOVE_FIELD,
        fieldName: fieldName
    }
} 