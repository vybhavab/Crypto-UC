import React from "react";
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer} from 'recharts';

const ChartTest= (props:any) =>{
  const data = [
    { 
      time: "Sep",
      users: 58,
    },
    {
      time: "Oct",
      users: 300,
    },{
      time: "Nov",
      users: 500,
    }
  ]
  return(
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={600} height={350} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="time" />
        <YAxis />
        <Bar label={true} dataKey="users" fill={props.colorFill} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartTest;
