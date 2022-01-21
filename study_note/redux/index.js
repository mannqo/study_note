import { addAction, subAction } from "./store/actionCreators.js";
import store from "./store/index.js";  // webpack才可以简写, node不得行


store.subscribe(() => {
    console.log(store.getState());
})

 
store.dispatch(addAction(10));
store.dispatch(addAction(6));
store.dispatch(subAction(9));