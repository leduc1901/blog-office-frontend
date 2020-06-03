import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Switch, Link } from "react-router-dom"
import { IndexRoute} from "react-router"
import Index from "./components/index/Index"
import Detail from "./components/detail/Index"
import Admin from "./components/admin/Index"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/es/integration/react';
import {createStore} from 'redux';
import allReducers from "./reducers"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { sessionService } from 'redux-react-session';


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [                    
  //   'accountReducer'
  // ],
  blacklist: [
    // 'late'
  ]
}

const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer);
let persistor = persistStore(store)
sessionService.initSessionService(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route  path="/admin" exact component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
