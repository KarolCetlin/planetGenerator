import { planetsCollection, currentPlanetNumber } from "../Index";
//
// this.currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];
// this.raceNameCollection = [];
// this.raceQuantityCollection = [];
//
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [...this.raceNameCollection],
//         datasets: [{
//             label: '# of Votes',
//             data: [...this.raceQuantityCollection],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.5)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

class Diagram{
    constructor(){
        this.currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];
        this.raceNameCollection = [];
        this.raceQuantityCollection = [];

        this.addPropertyToCollection();
        // this.renderDiagram();
    }

    addPropertyToCollection(){

        for(let index = 0; index < this.currentOutpost.length; index++){

            this.setOutpostProperty('name', index, this.raceNameCollection);
            this.setOutpostProperty('quantity', index, this.raceQuantityCollection);

            let currentRaceName = this.currentOutpost[index]['name'];
            this.raceNameCollection.push(currentRaceName);

            let currentRaceQuantity = this.currentOutpost[index]['quantity'];
            this.raceQuantityCollection.push(currentRaceQuantity);

        }
    }

    setOutpostProperty(property, raceIndex, addToArray){

        let currentProperty = this.currentOutpost[raceIndex][property];
        addToArray.push(currentProperty)

    }

    render() {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [...this.raceNameCollection],
                datasets: [{
                    label: '# of Votes',
                    data: [...this.raceQuantityCollection],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
}



//}


export default Diagram


















// import ApexCharts from 'apexcharts';
//
// class Diagram{
//     constructor(){
//         this.currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];
//         this.raceNameCollection = [];
//         this.raceQuantityCollection = [];
//
//         this.addPropertyToCollection();
//         // this.renderDiagram();
//     }
//
//     addPropertyToCollection(){
//
//         for(let index = 0; index < this.currentOutpost.length; index++){
//
//             this.setOutpostProperty('name', index, this.raceNameCollection);
//             this.setOutpostProperty('quantity', index, this.raceQuantityCollection);
//
//             // let currentRaceName = this.currentOutpost[index]['name'];
//             // this.raceNameCollection.push(currentRaceName);
//             //
//             // let currentRaceQuantity = this.currentOutpost[index]['quantity'];
//             // this.raceQuantityCollection.push(currentRaceQuantity);
//
//         }
//     }
//
//     setOutpostProperty(property, raceIndex, addToArray){
//
//         let currentProperty = this.currentOutpost[raceIndex][property];
//         addToArray.push(currentProperty)
//
//     }
//
//
//
//
//     renderDiagram(){
//
//         var options = {
//             chart: {
//                 width: '440px',
//                 type: 'pie',
//
//
//
//
//             },
//             labels: [...this.raceNameCollection],
//             series: [...this.raceQuantityCollection],
//             responsive: [{
//                 breakpoint: 480,
//                 theme: {
//                     mode: 'dark',
//                     palette: 'palette2',
//                     monochrome: {
//                         enabled: false,
//                         color: '#255aee',
//                         shadeTo: 'light',
//                         shadeIntensity: 0.65
//                     },
//                 },
//
//                 options: {
//                     chart: {
//                         width: '200px',
//                     },
//                     colors: ['#ff0000'],
//                     legend: {
//                         show: true,
//                         position: 'top',
//                         labels: {
//                             colors: ['#ff0000'],
//                             useSeriesColors: false
//
//                         },
//                     },
//
//                     annotations: {
//                         position: 'front',
//                     },
//
//
//                     dataLabels: {
//                         enabled: true,
//                         enabledOnSeries: undefined,
//                                               textAnchor: 'middle',
//                         offsetX: 0,
//                         offsetY: 0,
//                         style: {
//                             fontSize: '34px',
//                             fontFamily: 'Helvetica, Arial, sans-serif',
//                             colors: '#ffffff'
//                         },
//                         dropShadow: {
//                             enabled: false,
//                             top: 1,
//                             left: 1,
//                             blur: 1,
//                             opacity: 0.45
//                         }
//                     }
//
//                 }
//             }]
//
//
//         }
//
//         var chart = new ApexCharts(document.querySelector("#chartContainer"), options);
//
//         chart.render();
//
//
//     }
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // let currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];
//
//
//
//
// // let raceNameCollection = [];
//
//
//
// //
// // for(let index = 0; index < currentOutpost.length; index++){
// //
// //   let actual2 = currentOutpost[index]['name'];
// //
// //
// //   raceNameCollection.push(actual2);
// //
// // }
//
// // let raceQuantityCollection = [];
// //
// // for(let index = 0; index < currentOutpost.length; index++){
// //
// //     let actual2 = currentOutpost[index]['quantity'];
// //
// //     raceQuantityCollection.push(actual2);
// //
// // }
//
// // console.log(raceNameCollection);
//
//
//
//
// export default Diagram