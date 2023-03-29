import { CHANGE_MAIN_VALUE, ADD_FIELD, REMOVE_FIELD } from "../actions/actionType"

const initialState = {
    form: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        jobTitle: "",
        department: "",
        companyName: "",
        website: "",
        officePhone: "",
        officeFax: "",
        address: "",
        addressLine2: "",
        image: null,
        additionalField: []
    }
}



const mainReducer = (prevState = initialState, action) => {
    
    switch(action.type){
        case CHANGE_MAIN_VALUE: 
            // console.log(prevState)
            let stringifiedPrevState = JSON.stringify(prevState)
            let newState = JSON.parse(stringifiedPrevState)

            // if(action.key === "image"){
            //     newState["form"][action.key] = URL.createObjectURL(action.value);
            // }
            // else 
            if(action.key === "reset"){
                newState = initialState
            }
            else newState["form"][action.key] = action.value
            return {
                ...newState
            }
        
        case ADD_FIELD:

            let stringifiedState = JSON.stringify(prevState)
            let updatedState = JSON.parse(stringifiedState)

            updatedState["form"]["additionalField"].push({
                fieldName: action.fieldName,
                fieldType: action.fieldType,
                fieldValue: action.fieldValue
            })

            return {
                ...updatedState
            }

        case REMOVE_FIELD:
            let newstringifiedState = JSON.stringify(prevState)
            let newUpdatedState = JSON.parse(newstringifiedState)

            let newFields = []
            newUpdatedState["form"]["additionalField"].forEach((field) => {
                if(field.fieldName !== action.fieldName)
                    newFields.push(field);
            })

            newUpdatedState["form"]["additionalField"] = newFields

            return {
                ...newUpdatedState
            }
        
        default: return prevState
    }
}

export default mainReducer;