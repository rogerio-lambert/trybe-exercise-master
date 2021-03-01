let headerTrybe = document.querySelector('header');
let urgentsTasks = document.querySelector('.emergency-tasks');
let noUrgentTasks = document.querySelector('.no-emergency-tasks');
let footerTrybe = document.getElementsByTagName('footer');
let titles = document.querySelectorAll('h3');
headerTrybe.style.backgroundColor = 'green';
urgentsTasks.style.backgroundColor = 'orange';
noUrgentTasks.style.backgroundColor = 'yellow';
console.log(urgentsTasks, urgentsTasks.length);
for (let index = 0; index < titles.length; index += 1) {
    if (index < 2) {
        titles[index].style.backgroundColor = 'purple'; 
    } else {
        titles[index].style.backgroundColor = 'black';
    }
}
footerTrybe[0].style.backgroundColor = 'darkslategray';

