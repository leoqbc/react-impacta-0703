import { configureStore } from "@reduxjs/toolkit";
import alunos from "./alunos/reducer";

const store = configureStore({
    reducer: {
        alunos
    }
});

export default store;