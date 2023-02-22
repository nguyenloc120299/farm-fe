import { createContext, useReducer, useEffect } from "react";
import { ACTIONS } from "./Actions";
import reducers from "./Reducers";
export interface ContextType {
    state: any
    dispatch: React.Dispatch<any>;

}
export const DataContext = createContext<ContextType | null>(null);

export const DataProvider = ({ children }: any) => {
    const initalState = {
        modal: {
            modalSelectPlant: false
        }
    }
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