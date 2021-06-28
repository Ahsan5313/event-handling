let name  = document.getElementById('name')

name.addEventListener('keypress' ,function(event){


   if(event.key == 'Enter'){

    console.log(event.target.value)
 
    document.getElementById('myName').innerHTML = `My name is ${event.target.value}`

    event.target.value = ' ';
   }


})

let skills = document.getElementsByName('skill')

let result = document.getElementById('result');

let checkedSkills = [];

[...skills].forEach(skill => {

   skill.addEventListener('change', function(event){

      if(event.target.checked){

         checkedSkills.push(event.target.value)
         outputSkill(result, checkedSkills)
     
      }else{

        let ind = checkedSkills.indexOf(event.target.value)
         checkedSkills.splice(ind, 1)  
         outputSkill(result, checkedSkills)      
      }
   })
})

function outputSkill(parent, skills){

   let rst = ''
   skills.forEach((skill, index) =>{

     rst += `(${index + 1})  ${skill}`
   })

   parent.innerHTML = rst

}