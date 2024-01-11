class student {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  saludar() {
    console.log(`Mi nombre es ${this.name},
     mi edad es: ${this.age}, 
     mi profesion es: ${this.profession}`);
  }
}

const student1 = new student("Jose",23,"Diseñador");
student1.saludar();


