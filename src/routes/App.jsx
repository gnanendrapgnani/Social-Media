import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBars from "../components/SideBars";
import CreatePost from "../components/CreatePost";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="conatiner">
        <SideBars selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet />
          {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
