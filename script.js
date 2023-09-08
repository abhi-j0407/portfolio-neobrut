// Intersectional observer
const workEx = document.querySelectorAll('.company-container')
const projects = document.querySelectorAll('.project')
const sections = document.querySelectorAll('.section')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("highlight", entry.isIntersecting)
        })
    },
    {
        threshold:0.25
    }
)

workEx.forEach(workExp => {
    observer.observe(workExp)
})

projects.forEach(project => {
    observer.observe(project)
})

sections.forEach(section => {
  observer.observe(section)
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

// Show nav on scroll

// Shows on page load
document.querySelector('.navbar').classList.add('show');

// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
