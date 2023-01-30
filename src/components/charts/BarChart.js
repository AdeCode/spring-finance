import React from 'react'
import { Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, //y
    Tooltip,
    Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, 
    Tooltip,
    Legend
)

function BarChart() {
    // const data = [
    //     { year: 2010, count: 10 },
    //     { year: 2011, count: 20 },
    //     { year: 2012, count: 15 },
    //     { year: 2013, count: 25 },
    //     { year: 2014, count: 22 },
    //     { year: 2015, count: 30 },
    //     { year: 2016, count: 28 },
    // ];
    const data = {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
           {
            label:'Cards',
            data:[4,5,2,8,5,10,3,8,12,17,9,11],
            backgroundColor:'#45E64A',
            borderColor:'black',
            borderWidth:1
           },
           {
            label:'Wallets',
            data:[7,3,2,3,7,1,3,9,10,13,5,6],
            backgroundColor:'#634DEE',
            borderColor:'black',
            borderWidth:1
           }
        ],
    };

    const options = {
        responsive: true,
    }
  return (
    <div>Spending Statistics
        <div>
            <Bar
                data={data}
                options={options}
            >

            </Bar>
        </div>
    </div>
  )
}

export default BarChart