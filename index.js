// تعريف فئة القط
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // تعريف فئة الكلب
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // تعريف فئة العصفور
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // إنشاء أمثلة من الفئات باستخدام أسماء متغيرات مختلفة
  let myCat = new Cat("Whiskers", "female");
  let myDog = new Dog("Rex", "male");
  let myBirdMale = new Bird("Polly", "male");
  let myBirdFemale = new Bird("Lola", "female");
  
  // طباعة النتائج
  console.log(myCat.speak()); // Whiskers says meow!
  console.log(myDog.speak()); // Rex says woof!
  console.log(myBirdMale.speak()); // It's me! Polly, the parrot!
  console.log(myBirdFemale.speak()); // Lola says squawk!
  