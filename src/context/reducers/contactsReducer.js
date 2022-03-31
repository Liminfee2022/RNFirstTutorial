import { LOGIN } from "../../constants/routeName";

const contactsReducer = (state, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {};
        default:
            return state;
    }
}
export default contactsReducer;
