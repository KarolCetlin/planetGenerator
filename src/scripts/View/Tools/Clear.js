

class Clear{
    constructor(...args){
        this.clearElements(...args)
    }

    clearElements(...args){

       let $elementsToClear = [...args];


        for(let elementIndex = 0; elementIndex < $elementsToClear.length; elementIndex++ ){


            let cleared = document.getElementById($elementsToClear[elementIndex]);
            cleared.innerHTML = '';
        }
    }
}

export default Clear;