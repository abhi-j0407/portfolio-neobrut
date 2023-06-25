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