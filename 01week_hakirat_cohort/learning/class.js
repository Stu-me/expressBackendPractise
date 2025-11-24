class zoo{
    constructor(age,name){
        this.cusAge = age;
        this.cusName = name;
        console.log(`Welcome to sunderbaan  ${this.cusName} eventhough your age is ${this.cusAge} your child inside is proud of you `);
    }
    
    danger(){
        console.log("all animals in the zoo are dangerous");
    }
    warning(){
        console.log("Don't touch them");
        console.log("Don't break in the boundary");
        console.log("Don't make an eye contact");
        console.log("Don't feed them");
    }
    price(){
        console.log("free");
    }
};
 let cust1 = new zoo(23,"hun sung wandoo");
 cust1.danger();
 cust1.warning();
 