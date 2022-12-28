const container=document.createElement('div');
container.setAttribute('id','container');
const buttonContainer=document.createElement('div');
const button=document.createElement('button');
buttonContainer.appendChild(button);
buttonContainer.appendChild(container);
document.body.appendChild(buttonContainer);

var padSize=16;
function prompter() {
    do {
        padSize=prompt("Please enter number of squares per side for grid");
    } while (padSize>100||padSize<1);
    sketchNull();
    sketchMaker(padSize);
    styling();
}

function sketchNull() {
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements[i].length; j++) {
            rows[i].removeChild(elements[i][j]);
        }
        container.removeChild(rows[i]);
    }
}

let elements=[];
let rows=[];
sketchMaker(padSize);
styling();

function sketchMaker(padSize) {
    console.log(padSize+" in finction");
    elements=[];
    rows=[];
    
    for (let i = 0; i < padSize; i++) {
        elements.push(document.createElement('div'));
        rows.push(document.createElement('div'));
    }
    for (let i = 0; i < padSize; i++) {
        elements[i]=[];
    }
    for (let i = 0; i < padSize; i++) {
        for (let j = 0; j < padSize; j++) {
            elements[i].push(document.createElement('div'));
        }
    }
    
    for (let i = 0; i < padSize; i++) {
        container.appendChild(rows[i]);
        for (let j = 0; j < padSize; j++) {
            rows[i].appendChild(elements[i][j]);
        }
    }
}


document.body.style.display="flex";
document.body.style.minHeight="100vh";
document.body.style.width="100%";
document.body.style.justifyContent="center";
document.body.style.backgroundColor="#4d0099";


//document.body.style.flex="1";

buttonContainer.style.display="flex";
buttonContainer.style.flexDirection="column";
buttonContainer.style.border="solid black";
buttonContainer.style.width="900px";

button.style.width="150px";
button.style.height="18px";
button.style.alignSelf="center"
button.style.border="solid black";
button.style.margin="5px";
button.style.padding="15px";
button.style.borderRadius="7px";
button.innerText="Change Density";
button.addEventListener('click',prompter);


container.style.display="flex";
container.style.flexDirection="column";
container.style.border="solid black";
container.style.height="100%";

function styling() {
    const rowContainer=document.querySelectorAll('#container div div');

    rowContainer.forEach(element => {
        element.classList.add('element');
        element.style.backgroundColor='white';
        element.style.flex="1";
        //element.style.border="solid black";
        element.addEventListener('mouseover',()=>{
            element.style.backgroundColor='blue';
        });
    });

    const rowC=document.querySelector('#container').childNodes;

    rowC.forEach(element => {
        element.classList.add('bilabong');
        element.style.display="flex";
        element.style.flex="1";
    });
}

