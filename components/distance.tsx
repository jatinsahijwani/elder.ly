"use client";
import { useState, useEffect } from "react";

export function Distance() {
 const [value, setValue] = useState();
 const [urgent, setUrgent] = useState(false);

 
 const checkDistance = async () => {
    const response = await fetch('http://192.168.137.28/distance', {
      method: 'GET',
    });
    const data = await response.json();
    if (data.sensorData <= 35) {
      setUrgent(true);
    } else {
      setUrgent(false);
    }
    setValue(data.sensorData);
 };

 useEffect(() => {
    const interval = setInterval(checkDistance, 500);
    return () => clearInterval(interval);
 }, []);

 return (
    <div className={`flex flex-col items-center justify-center h-screen ${urgent ? 'bg-red-600' : 'bg-green-500'}`}>
      <div className="text-9xl font-bold text-black">{value} cm</div>
      <p className="mt-4 text-2xl font-medium text-black ">Total Distance Left</p>
    </div>
 );
}