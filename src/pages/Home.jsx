import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      Homepage
    </div>
  );
}
