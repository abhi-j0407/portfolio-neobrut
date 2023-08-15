// Intersectional observer
const workEx = document.querySelectorAll('.company-container')
const projects = document.querySelectorAll('.project')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("highlight", entry.isIntersecting)
        })
    },
    {
        threshold:0.9
    }
)

workEx.forEach(workExp => {
    observer.observe(workExp)
})

projects.forEach(project => {
    observer.observe(project)
})



//Hacker text animation
const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

const hackElements = document.getElementsByClassName('hacker-text');

const hackerFunc = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

Array.from(hackElements).forEach(element => {
    element.addEventListener('mouseover', hackerFunc);
});