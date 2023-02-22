import { ACTIONS } from "./Actions";


const reducers = (state: any, action: any) => {
    switch (action.type) {
        case ACTIONS.TOOGLE_MODAL_SELECTPLANT:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    modalSelectPlant: !state.modal.modalSelectPlant
                }
            }
        default:
            return state;
    }
};

export default reducers;