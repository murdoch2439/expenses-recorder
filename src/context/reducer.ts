

const initialState = {
    formValues: {
        currency: "",
        total_amount: "",
        date:"",
        operation_type:"",
    },
};

const reducer = (state:any, action:any) => {
    switch (action.type) {
        case "editFormValue":
            state.formValues[action.key.toLowerCase()] = action.value;
            return { ...state };

        case "emptyFormValues":
            return {
                ...state,
                formValues: initialState.formValues
            };
        // case CHANGE_MODAL_STATES:
        //     state.modalStates[action.key.toLowerCase()] = action.value
        //     return {...state}
        default:
    }
    return state;
};

export { initialState, reducer }
