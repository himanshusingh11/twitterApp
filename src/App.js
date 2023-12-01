import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "./actions/tweetActions";
import TweetList from "./components/TweetList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <div className="main-container">
      <Header />
      <main className="container my-4">
        <SearchBar />
        <TweetList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
