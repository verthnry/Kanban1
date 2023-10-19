


import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";

const App = () => {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  // Display loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle errors gracefully
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the Navbar and Dashboard components with fetched data
  return (
    <div>
      <Navbar />
      <Dashboard tickets={tickets} />
    </div>
  );
};

export default App;
