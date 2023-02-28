class Person {
    constructor(name, email, contact, age){
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.age = age;
    }
}

class Employees extends Person{
    constructor(name, email, contact, age, dept, designation, salary){
        super(name, email, contact, age);
        this.dept = dept;
        this.designation = designation;
        this.salary = salary;
    }
}

class Student extends Person{
    constructor(name, email, contact, age, semester, No_ofCourses){
        super(name, email, contact, age);
        this.semester = semester;
        this.No_ofCourses = No_ofCourses;
    }
}

class Teacher extends Employees{
    constructor(name, email, contact, age, dept, designation, salary, yearOfJoining){
        super(name, email, contact, age, dept, designation, salary);
        this.yearOfJoining = yearOfJoining;
    }
}

class Staff extends Employees{
    constructor(name, email, contact, age, dept, designation, salary, DOB){
        super(name, email, contact, age, dept, designation, salary);
        this.DOB = DOB;
    }
}

var student1 = new Student('Kulsoom Khurshid', 'kulsoomkhurshid26@gmail.com', '0332-5316694', 21, 6, 5);
console.log("STUDENT 1");
console.log(
    "Name of Student: "+student1.name+
    "\nEmail: "+student1.email+
    "\nContact Number: "+student1.contact+
    "\nAge: "+student1.age+
    "\nSemester: "+student1.semester+
    "\nNo. of courses registered: "+student1.No_ofCourses
    );
console.log('');

var student2 = new Student('Labeeka Hameed', 'labeekahameed27@gmail.com', '0310-56785432', 22, 7, 6);
console.log("STUDENT 2");
console.log(
    "Name of Student: "+student2.name+
    "\nEmail: "+student2.email+
    "\nContact Number: "+student2.contact+
    "\nAge: "+student2.age+
    "\nSemester: "+student2.semester+
    "\nNo. of courses registered: "+student2.No_ofCourses
    );
console.log('');

var teacher1 = new Teacher('Sabah Khurshid', 'sabahkhurshid98@gmail.com', '0335-5706881',50, 'Business Administration', 'Professor', '250,000', 2020);
console.log("TEACHER 1");
console.log(
    "Name of Student: "+teacher1.name+
    "\nEmail: "+teacher1.email+
    "\nContact Number: "+teacher1.contact+
    "\nAge: "+teacher1.age+
    "\nDepartment: "+teacher1.dept+
    "\nDesignation: "+teacher1.designation+
    "\nSalary: "+teacher1.salary+
    "\nYear Of Joining: "+teacher1.yearOfJoining
    );
console.log('');

var teacher2 = new Teacher('Aliza Tanweer', 'lizanoor786@gmail.com', '0301-8976554',30, 'Computer Science', 'Head Of Department', '550,000', 2010);
console.log("TEACHER 2");
console.log(
    "Name of Student: "+teacher2.name+
    "\nEmail: "+teacher2.email+
    "\nContact Number: "+teacher2.contact+
    "\nAge: "+teacher2.age+
    "\nDepartment: "+teacher2.dept+
    "\nDesignation: "+teacher2.designation+
    "\nSalary: "+teacher2.salary+
    "\nYear Of Joining: "+teacher2.yearOfJoining
    );
console.log('');

var staff1 = new Staff('Ali Ahmed', 'aliahmed34@gmail.com', '0334-7869943',29, 'Library', 'Librarian', '50,000', '21-10-1993');
console.log("STAFF 1");
console.log(
    "Name of Student: "+staff1.name+
    "\nEmail: "+staff1.email+
    "\nContact Number: "+staff1.contact+
    "\nAge: "+staff1.age+
    "\nDepartment: "+staff1.dept+
    "\nDesignation: "+staff1.designation+
    "\nSalary: "+staff1.salary+
    "\nYear Of Joining: "+staff1.DOB
    );
console.log('');

var staff2 = new Staff('Shakeel Ali', 'shakeelAli23@gmail.com', '0334-5678432',47, 'Admin Block', 'Cleaner', '30,000', '21-10-1975');
console.log("STAFF 2");
console.log(
    "Name of Student: "+staff2.name+
    "\nEmail: "+staff2.email+
    "\nContact Number: "+staff2.contact+
    "\nAge: "+staff2.age+
    "\nDepartment: "+staff2.dept+
    "\nDesignation: "+staff2.designation+
    "\nSalary: "+staff2.salary+
    "\nYear Of Joining: "+staff2.DOB
    );
console.log('');

    
    



