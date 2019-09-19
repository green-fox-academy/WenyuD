// Teacher Student
// Create Student and Teacher classes

// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
class Student {
    learn() {
        return 'This student is learning when the teacher teaches.'
    }

    question(teacher) {
        teacher.answer()
    }
}
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
class Teacher {
    teach(student) {
        return student.learn()
    }
    answer() {
        console.log('This teacher is answering when the student questions.')
    }
}

// Instantiate a Student and Teacher object

// Call the student's question() method and the teacher's teach() method
let student = new Student();
let teacher = new Teacher();
student.question(teacher);
console.log(teacher.teach(student));