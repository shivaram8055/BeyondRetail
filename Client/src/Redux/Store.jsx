import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import CartSlice from "./CartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, CartSlice);

const Store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

const persistor = persistStore(Store);

export { Store, persistor };
