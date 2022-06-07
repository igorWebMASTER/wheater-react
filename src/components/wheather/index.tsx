import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
};



function Wheater({ labels, series1, series2 }: { labels: string[], series1: number[], series2: number[] }) {
    const data = {
        labels,
        datasets: [
            {
                label: '1',
                data: series1,
                borderColor: 'rgba(106, 238, 66, 0.5)',
                backgroundColor: 'rgba(106, 238, 66, 0.5)',
            },
            {
                label: '2',
                data: series2,
                borderColor: 'rgba(66, 106, 238, 0.5)',
                backgroundColor: 'rgba(66, 106, 238, 0.5)',
            },
        ],
    };


    return <Line options={options} data={data} />;
}

export const MemoizedWheater = React.memo(Wheater);