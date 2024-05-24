import { connect } from "react-redux"
import Form from "./Form"
import {collictionDataTC} from '../../Reducers/FormReducer.js'

let MSTP = (store) => {
    return {

    }
}

let MDTP = (dispatch) => {
    return {
        collictionData: (data) => {
            dispatch(collictionDataTC(data))
        }
    }
}

let FormContainer = connect(MSTP, MDTP)(Form);
export default FormContainer