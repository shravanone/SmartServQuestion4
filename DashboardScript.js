function loadChart1(){

    const ctx1 = document.getElementById('chart1').getContext("2d");

    const data1 = [
        'Everett',
        'Seattle',
        'Lynnwood',
        'Bothell',
        'Mukilteo',
        'Edmonds'
    ]

    const data = {
        labels : data1,
        datasets :[
            {
                data: [80000,75000,49000,47500,46000,34000],
                label : "Revenue for November 2019",
                backgroundColor: 'rgba(72, 190, 155,1)'
            }
        ]
    }

    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            scales : {
                y : {
                    beginAtZero: true
                }
            }
        },
    };

    const chart1 = new Chart(ctx1,config)

}

function loadChart2(){

    const ctx2 = document.getElementById('chart2').getContext("2d");

    const data2 = [
        'Service Plumbing',
        'Bid Work HVAC',
        'Service HVAC',
        'Bid Work Plumbing',
        'HWT Replacement',
        'Maintenance',
        'Material Sale'
    ]

    const data = {
        labels : data2,
        datasets :[
            {
                data: [182000,125000,79500,78000,46000,44000,1500],
                label : "Revenue for November 2019",
                backgroundColor: 'rgba(72, 190, 155,1)'
            }
        ]
    }

    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            scales : {
                y : {
                    beginAtZero: true
                }
            }
        },
    };

    const chart1 = new Chart(ctx2,config)

}

function loadCharts(){
    loadChart1();
    loadChart2();
}

const timeout = setTimeout(loadCharts,1000)