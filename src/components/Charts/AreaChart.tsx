// src/components/area.rechart.js

import React from "react";
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaRechart=()=> {

    const data = [
        {
            "name": "Jan 2019",
            "Sent": 3432,
            "Received": 2342
        },
        {
            "name": "Feb 2019",
            "Sent": 2342,
            "Received": 3246
        },
        {
            "name": "Mar 2019",
            "Sent": 4565,
            "Received": 4556
        },
        {
            "name": "Apr 2019",
            "Sent": 6654,
            "Received": 4465
        },
        {
            "name": "May 2019",
            "Sent": 8765,
            "Received": 4553
        }
    ]

        return (
            <AreaChart width={730} height={350} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Sent" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Received" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        )
    };


export default AreaRechart;