"use strict"

const p =document.querySelectorAll('p')

console.log(p)


function cbscript (src){
  const script= document.createElement('script')
  script.src=src
  document.body.append(script)
 
}
cbscript('js/first.js')
cbscript('js/second.js')
cbscript('js/thirty.js')
console.log(document.body)
// console.log(document.querySelector('[data-current="b"]').nextElementSibling)

// console.log(document.querySelector('body').childNodes)

// for(let node of document.body.childNodes){
//   if(node.nodeName=="#text"){
//     continue
//   }
//   console.log(node)
// }


// // const btna = document.querySelector('#btn')
// const overlay= document.querySelector('.overlay')
// const link = document.querySelector('a')

// link.addEventListener('click', (e)=>{
//   e.preventDefault();
//   alert('link')
// })

// const btns= document.querySelectorAll('button')

// const logger= ()=>{
// alert('Jasur click')
// }

// btns.forEach((item)=>{
//   item.addEventListener('click', logger ,{})
// })

// // console.log(document.body)
// // console.log(document.head)
// // console.log(document.body.childNodes)

// console.log(document.querySelector('#btn').parentNode.parentNode)

// // btna.onclick= function (){
// //  alert('Click jsda qilindi')
// // }
// btna.onclick= function (){
//   alert('Click jsda qilindi2')
//  }

// btna.addEventListener('click', ()=>  {
// alert('evnt')
// })
// btna.addEventListener('click', ()=>  {
//   alert('evnt1')
//   })
//   btna.addEventListener('click', ()=>  {

// //     })

// btna.addEventListener('mouseenter',(event)=>{
//   // alert('hover')
//   event.target.remove()
// })


// let i =0

// const addElement= (event)=>{
//   i++
  
//   if(i===3){

//      btna.removeEventListener('click', addElement)
//   }
//   console.log(i)
// }

// btna.addEventListener('click', addElement)

// let i=0

// const addElement=((event)=>{
//   i++
//   console.log(event.currentTarget)
// })

// btna.addEventListener('click' , addElement)

// overlay.addEventListener('click', addElement)




















// let i=0

// const addElement=(event) =>{

// i++
// if(i===3){
//   btna.removeEventListener('click', addElement)

// }

// console.log(i)

// }



// btna.addEventListener('click', addElement)

