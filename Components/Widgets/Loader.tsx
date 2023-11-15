"use client";
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center my-24">
          <PulseLoader color="#ffffff" />
        </div>
      ) : (
        <p className="flex justify-center my-24">No Record Found!</p>
      )}
    </div>
  );
};

export default Loader;
