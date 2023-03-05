import { createContext, useReducer, useEffect } from "react";
import { ACTIONS } from "./Actions";
import reducers from "./Reducers";
export interface ContextType {
    state: any
    dispatch: React.Dispatch<any>;
}
export type typeModal = {
    modalSelectPlant: boolean
}
export type typeState = {
    modal: typeModal
}
const initalState: typeState = {
    modal: {
        modalSelectPlant: false
    }
}
export const DataContext = createContext<ContextType>({
    state: initalState,
    dispatch: () => { }
});

export const DataProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(reducers, initalState);
    const toggleModalSelectPlant = () => {
        dispatch({
            type: ACTIONS.TOOGLE_MODAL_SELECTPLANT
        })
    }
    return (
        <DataContext.Provider
            value={{
                state,
                dispatch,
            }}>
            {children}
        </DataContext.Provider>
    );
}