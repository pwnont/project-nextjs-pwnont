import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo() {
    // const dataset = [
    //     { x: 1, y: 2 },
    //     { x: 2, y: 5.5 },
    //     { x: 3, y: 2 },
    //     { x: 5, y: 8.5 },
    //     { x: 8, y: 1.5 },
    //     { x: 10, y: 5 },
    //   ];
    //mock data set for the line chart set y values is price and x values is time
const dataset = Array.from({ length: 70 }, (_, i) => ({
    x: Math.random() * 4,
    y: (10 + i * 0.15).toFixed(2)
}));
     
return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <LineChart
            dataset={dataset}
            xAxis={[{ dataKey: 'y', label: 'Time' }]}
            series={[{ dataKey: 'x', label: 'Currency' }]}
            height={300}
            margin={{ left: 30, right: 30, top: 50, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
        />
    </div>
);
}