import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ROUTES from "./routesModel";
import FavoriteCards from "../cards/pages/FavoriteCards";
import LoginPage from "../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import SandboxPage from "../sandbox/SandboxPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import DeletedCards from "../cards/pages/DeletedCards";
import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import CrmSystem from "../adminActions/CrmSystem";
import EditProfile from "../users/editProfile/EditProfile";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxPage />} />
      <Route path={ROUTES.DELETED} element={<DeletedCards />} />
      <Route path={ROUTES.ADD_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.CARD_EDIT + "/:id"} element={<EditCardPage />} />
      <Route path={ROUTES.CRMSYSTEM} element={<CrmSystem />} />
      <Route path={ROUTES.USER_PROFILE} element={<EditProfile />} />




      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
