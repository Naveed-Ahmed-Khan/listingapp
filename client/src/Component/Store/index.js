import { createStore } from "redux";
import allreducers from "../Reducer/Reducer";
const store =createStore(allreducers)
export default store