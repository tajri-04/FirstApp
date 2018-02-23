
class Personne {
  firstName:string;
  lastName:string;
  age: number;

  constructor(firstName:string,lastName:string,age: number){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }

  setAge(newAge:number) {
    this.age = newAge;
  }

  getAge():number {
    return this.age;
  }

}

let people : Personne[] =[];


function init() {
  let firstName:any =document.getElementById('first-name');
  let lastName:any =document.getElementById('last-name');
  let age:any =document.getElementById('age');
  let button : any =document.getElementById('submit-button');

  button.onclick = () => {
    let person = new Personne(firstName,lastName,age);
    onButtonClick(person);
  }



}

function  onButtonClick(person:Personne) {
  people.push(person);
  console.log('Given people is',people);
}
init();
