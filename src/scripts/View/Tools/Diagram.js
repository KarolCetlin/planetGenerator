import {currentPlanetNumber, planetsCollection} from "../../Index";
import ApexCharts from 'apexcharts';

class Diagram{
    constructor(){
        this.currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];
        this.raceNameCollection = [];
        this.raceQuantityCollection = [];

        this.addPropertyToCollection();
        this.renderDiagram();
    }

    addPropertyToCollection(){

        for(let index = 0; index < this.currentOutpost.length; index++){

            let currentRaceName = this.currentOutpost[index]['name'];
            this.raceNameCollection.push(currentRaceName);

            let currentRaceQuantity = this.currentOutpost[index]['quantity'];
            this.raceQuantityCollection.push(currentRaceQuantity);



        }
    }




    renderDiagram(){

        var options = {
            chart: {
                width: '100%',
                type: 'pie',
            },
            labels: [...this.raceNameCollection],
            series: [...this.raceQuantityCollection],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: true,
                        position: 'top',
                        color: 'white'
                    }
                }
            }]
        }

        var chart = new ApexCharts(document.querySelector("#chartContainer"), options);

        chart.render();


    }


}














// let currentOutpost = planetsCollection[currentPlanetNumber]['outpost']['raceArray'];




// let raceNameCollection = [];



//
// for(let index = 0; index < currentOutpost.length; index++){
//
//   let actual2 = currentOutpost[index]['name'];
//
//
//   raceNameCollection.push(actual2);
//
// }

// let raceQuantityCollection = [];
//
// for(let index = 0; index < currentOutpost.length; index++){
//
//     let actual2 = currentOutpost[index]['quantity'];
//
//     raceQuantityCollection.push(actual2);
//
// }

// console.log(raceNameCollection);




export default Diagram