const input = document.getElementById("input");


function handleUpdate () {
    

                                                       
    document.getElementById("top-photo").style.opacity = this.value/100;
    document.getElementById("week-count").innerHTML = this.value + ". tydzień";
}

input.addEventListener('change', handleUpdate);

    
    
//const inputs = document.querySelectorAll('.controls input ');
//
//        function handleUpdate () {
//            const sufix = this.dataset.sizing || ''; /*or nothing*/
//            document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix);
//    
//}
//
//inputs.forEach(input => input.addEventListener('change', handleUpdate));
