
import React  from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { AreaChart, Area  } from 'recharts';

function Home() {
  const data = [
    {
      name: 'Home Page',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'about Page',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: ' resume Page',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: ' projects Page',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'contact Page',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'blog Page',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'more G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>




      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
 

    </div>
  )
}

export default Home