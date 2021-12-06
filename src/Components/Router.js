import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Confession from "./Confession";
import Misdemeanour from "./Misdemeanour";

const Router = () =>
    <Routes>
            <Route index element={<Home />} />
            <Route path="misdemeanour" element={<Misdemeanour />} />
            <Route path="confession" element={<Confession />} />
    </Routes >;

export default Router;