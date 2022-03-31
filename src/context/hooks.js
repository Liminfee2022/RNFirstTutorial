import {useContext} from 'react'
import GlobalContext from './Provider'

export const useStore = () => {
    const [state, dispatch] = useContext(GlobalContext);
    return [state, dispatch];
}