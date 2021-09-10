import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { RegisterUser } from "./Reducers/UserReducer";
import { GetUsers } from "./Reducers/GetUserReducer";
import { GetALL } from "./Reducers/GetAllReducer";
import { GetRegisterData, UpdateUserData, UserData } from "./Redux/Reducer/Reducer";


const reducer = combineReducers({

    RegisterUser:RegisterUser,
    GetUsers:GetUsers,
    GetALL:GetALL,
    GetRegisterData:GetRegisterData,
    UserData:UserData,
    UpdateUserData:UpdateUserData
    


   
})

const intialState ={}


const middleware = [thunk];

const store = createStore( 
    reducer,
    intialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
      )
);

export default store;