import { currentPlanetNumber, planetsCollection } from "../../Index.js";


class Visible {
    constructor(booleanValue, visible, $element, value) {

        this.checkType(booleanValue, visible, $element, value);
    }


    checkType(booleanElement, visible, $element, value) {

        let element = document.getElementById($element);


        // let shows = {
        //
        //     show: () => {
        //         element.style.display = 'block';
        //         element.classList.remove('animation__rollOut');
        //         element.classList.add('animation__rollIn')
        //     },
        //     hide: () => {
        //         element.classList.add('animation__rollOut')
        //     },
        //
        // };
        //
        // console.log(shows[show]);



        if(visible === 'show' && value === 'yes'){

            element.style.display = 'block';
            element.classList.remove('animation__rollOut');
            element.classList.add('animation__rollIn')

        } else if(visible === 'show' && value === 'no') {


            element.classList.add('animation__rollOut')

        }







        if(visible === 'hide' && planetsCollection[currentPlanetNumber][booleanElement] === false){
            element.classList.add('animation__rollOut');


        } else if(visible === 'show' && planetsCollection[currentPlanetNumber][booleanElement] === true){
            element.style.display = 'block';
            element.classList.remove('animation__rollOut');
            element.classList.add('animation__rollIn')

        }


    }

    emptyBoolen(){



    }




}

export default Visible;