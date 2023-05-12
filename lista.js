/*LA SIGUIENTE FUNCION PRIMERAMENTE EVALUA QUE LA PANTALLA NO ESTE
VACÍA A LA HORA DE HACER CLICK. LUEGO A TRAVES DEL METODO 
CreateElement() CREA UN ELEMENTO DE LISTA ASIGNANDOLO A UNA VARIABLE
LUEGO AÑADE EL ELEMENTO CREADO A TRAVES DEL METODO AppendChild() A UNA
UL DE ID 'LISTA' QUE ANTERIORMENTE TAMBIEN FUE ASIGNADO A UNA VARIABLE
DESPUES CREA OTRO ELEMENTO ESTA VEZ IMG QUE CONTENDRA EL ICONO DE 
ELIMINAR Y QUE AL HACERLE CLICK EJECUTARA LA FUNCION PARA ELIMINAR 
LA TAREA A LA QUE PERTENECE*/


function addTask(){
    let input=document.getElementById("text").value
    
    if(input==''){
      document.getElementById('text').style= "box-shadow:0 0 10px red; animation: vibrate-3 0.5s linear 2 both"
    }
    else{
        document.getElementById('text').style=" animation:"
        
        let newTask=document.createElement("li")
        let father=document.getElementById("lista")
        father.appendChild(newTask)
        
        newTask.innerText=input
        
        let icon=document.createElement('img')
        icon.src='./Icons/icons8-eliminar.svg'
        icon.onclick=()=>{
            father.removeChild(newTask);
        };
        newTask.appendChild(icon)
        document.getElementById('text').setAttribute("placeholder", "Write here")
    };
};

//RECIBE LA SEÑAR DE AGREGAR TAREA SI SE PULSA LA TECLA ENTER
window.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
      addTask();
      displayDelete();
    };
});

//CUANDO DAS AL ENTER TE VACIA EL DISPLAY PARA QUE 
//ESCRIBA UNA NUEVA TAREA
function displayDelete(){
    let input=document.getElementById("text").value
   
    if(input!=''){
        document.getElementById("text").value=''
    };
};

