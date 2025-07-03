import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[70vh] bg-[#f0f2f5] text-center px-5 box-border">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
