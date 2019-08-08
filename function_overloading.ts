function details(){
let users = [
{
    id :1,
    name:"Amita",
    email:"a@gmail.com",
    avl:false
},
{
    id :2,
    name:"Neha",
    email:"n@gmail.com",
    avl:true
},
{
    id :3,
    name:"Seema",
    email:"p@gmail.com",
    avl:true
},
{
    id :4,
    name:"jjjjjj",
    email:"j@gmail.com",
    avl:false
},
];
return users;
};

function getInput(author:string):Array<string>;
function getInput(avl:boolean):Array<string>;
function getInput(returnValue:any):Array<string>
{
    let userDetails = details();
    let storeValueOfOutput:string[]=[];
    if(typeof returnValue=='string'){
        for(let uD of userDetails){
            if(uD.avl){
                storeValueOfOutput.push(uD.id.toString(),uD.email);
                break;
            }
            
        }

    }else if(typeof returnValue=='boolean'){
        for(let uD of userDetails){
            if(uD.avl){
                storeValueOfOutput.push(uD.name);
                break;
            }
            
        }

    }else {
        console.log("No such Value");
    }
    console.log(storeValueOfOutput);
return storeValueOfOutput;
}
getInput("jjjjjj");