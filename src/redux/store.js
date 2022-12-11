import {createStore} from "redux";
import rootReduces from "./reducer";

const store = createStore(rootReduces);

export default store;