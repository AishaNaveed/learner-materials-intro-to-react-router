import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Confession from "./Confession";
import Misdemeanour from "./Misdemeanour";
import NotFound from "./NotFound";

const Router = () =>
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="misdemeanour" element={<Misdemeanour />} />
            <Route path="confession" element={<Confession />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes >;

export default Router;