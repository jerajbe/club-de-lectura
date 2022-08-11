import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import injectContext from "./store/appContext";
import { Private } from "./pages/Private";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/Login.js";
import { Search } from "./pages/Search";
import { SingleBook } from "./pages/SingleBook";
import { Comments } from "./pages/Comments";
import { UserProfile } from "./pages/UserProfile";
import { Wrapper } from "@googlemaps/react-wrapper";
import { VisitProfile } from "./pages/VisitProfile";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="fondo">
      <Wrapper apiKey={"AIzaSyBl8fMSLm787M_HncAHXLd_yRz7V8wlXdI"}>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<VisitProfile />} path="/visit-profile/:userId" />
              <Route element={<Comments />} path="/comments" />
              <Route element={<SingleBook />} path="/modal" />
              <Route element={<Search />} path="/search" />
              <Route element={<Private />} path="/private" />
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<SignUp />} path="/sign-up" />
              <Route element={<UserProfile />} path="/user-profile/:userId" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
};

export default injectContext(Layout);
