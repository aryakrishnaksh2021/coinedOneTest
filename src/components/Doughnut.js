import React from 'react';
import { Doughnut } from 'react-chartjs-2';



const DoughnutChart = (props) => (
    <>
        <div className='header'>
            <h1 className='title'>{props.selectedLabel}</h1>
        </div>
        <Doughnut data={props.data} 
            options={{
                responsive: true,
                maintainAspectRatio: true,
            }}
        />
    </>
);

export default DoughnutChart;