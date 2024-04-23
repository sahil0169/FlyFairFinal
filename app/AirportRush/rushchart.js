import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const FlightChart = ({chartData}) => {
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Rush Trend',
                data: chartData.data,
                fill: false,
                backgroundColor: 'rgba(0, 255, 0, 1)',
                borderColor: 'rgba(128, 0, 128, 1)',
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false
            }
        },
        maintainAspectRatio: false,
    };
    const chartContainerStyle = {
        width: '1000px',
        // Responsive width
        height: '500px', // Fixed height for the chart
        boxShadow: '0px 3px 15px rgba(128, 0, 128, 1)', // Subtle shadow for depth
         // Padding around the chart
        backgroundColor: '#fff', // White background for the chart area
        borderRadius: '8px' // Rounded corners for the container
    };
    return (
        <div style={chartContainerStyle}>
            <Line data={data} options={options} />
        </div>
    );
};

export default FlightChart;
