import React, { useState, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts';

const ChartTest= (props:any) =>{
  const data = [
    { 
      time: "Sep",
      users: 1,
    },
    {
      time: "Oct",
      users: 3,
    },{
      time: "Nov",
      users: 7,
    }
  ]
  return(
    <BarChart width={600} height={350} data={data}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="time" />
      <YAxis />
      <Bar label={true} dataKey="users" fill={props.colorFill} />
    </BarChart>
  )
}

export default ChartTest;
