import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blogItems = document.querySelectorAll('.js-blogItem')

for (const element of blogItems) {
  gsap.from(element, {
    opacity: 0,
    y: -10,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%'
    }
  })
}
