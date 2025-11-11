import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import TopArtists from "../components/TopArtists";
import CommunityHighlights from "../components/CommunityHighlights";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <TopArtists></TopArtists>
      <CommunityHighlights></CommunityHighlights>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
