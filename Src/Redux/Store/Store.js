import {applyMiddleware, compose} from 'redux';
import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadinReducer from '../Reducers/LoadinReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  Loading: LoadinReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
