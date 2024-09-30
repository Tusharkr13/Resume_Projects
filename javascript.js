// check that skills section conatiner is visible or not
// ensure that initial width of colored skill div's is zer0 --> initialised value
// start animation on every skill --> increase skill width from 0 to skill
// Store skill level --> HTML with the help of data attribute

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false; 

function initialisedBars(){
    for(let bar of progressBars)
    {
        bar.style.width = 0 + "%";
    }
}
initialiseBars();
 
function fillBars(){
    for(let bar of progressBars)
    {
        let targetWidth= bar.getAttribute('data-bar-width');
        let currentWidth =0; 
        let interval =setInterval(function() {
            if(currentWidth > targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';

        }, 5);

    }
}

function checkScroll(){
        //  We have to check whether skill container is visible
        var cordinates = skillsContainer.getBoundingClientRect();
        if(!animationDone && cordinates.top <= window.innerHeight)  // checking if the windows inner heoight is greater or eqaul from the top
            {
            animationDone =true;
            console.log("Skill Section is visible");
             fillBars();
        }
        else if(cordinates.top > window.innerHeight)  //checking if the windows inner height is lesser from the top 
            { 
            animationDone = false;
            initialiseBars();
        }

}