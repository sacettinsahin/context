import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <Header />
      <br />
      <hr />
      <br />
      APP
      {user && (
        <div className="">Bu alan sadece giriş yapıldığında görülebilir.</div>
      )}
      <br />
      <hr />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
