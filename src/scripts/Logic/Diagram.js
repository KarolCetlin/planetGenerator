import {currentPlanetNumber, planetsCollection} from "../Index";
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

            this.setOutpostProperty('name', index, this.raceNameCollection);
            this.setOutpostProperty('quantity', index, this.raceQuantityCollection);

            // let currentRaceName = this.currentOutpost[index]['name'];
            // this.raceNameCollection.push(currentRaceName);
            //
            // let currentRaceQuantity = this.currentOutpost[index]['quantity'];
            // this.raceQuantityCollection.push(currentRaceQuantity);

        }
    }

    setOutpostProperty(property, raceIndex, addToArray){

        let currentProperty = this.currentOutpost[raceIndex][property];
        addToArray.push(currentProperty)

    }




    renderDiagram(){

        var options = {
            chart: {
                width: '100%',
                type: 'pie',

                style: {
                    cssClass: 'diagramView',
                }
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
                        fillColor: 'white'
                    },

                    annotations: {
                        position: 'front',
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