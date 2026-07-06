const express = require('express');

const app = express();

app.use(express.json());

let students = [
  { id: 1, name: 'Aziz Mohamed A. Makhlooq' },
  { id: 2, name: 'Abdullah Mohammed suleman A.butt' },
  { id: 3, name: 'Abeer Ahmed Abdulrahman' },
  { id: 4, name: 'Ali Husain Mohammed Saeed Abdul Alaliwat' },
  { id: 5, name: 'Ali Jaafar Alasfoor' },
  { id: 6, name: 'Ali Saleh Mahdi Saleh Ali Abdulla' },
  { id: 7, name: 'Bayan Abdulla Ali Markhoos' },
  { id: 8, name: 'Fadhel Sayed Abbas hassan hashem Mohamed' },
  { id: 9, name: 'Hasan Ali Jasim' },
  { id: 10, name: 'Hawra Abdullah Ali Mohamed Ali Markhoos' },
  { id: 11, name: 'Hawra Sayed Abbas Ali Ebrahim Sharaf' },
  { id: 12, name: 'Husain Ali Abdulmohsen Ateya Ali Abdulrasool' },
  { id: 13, name: 'Husain Ali Isa Abdulnabi Jasim Almajed' },
  { id: 14, name: 'Hussain Zuhair Almutawa' },
  { id: 15, name: 'Jassim Mohamed A. Alawainati' },
  { id: 16, name: 'Manar Alhamad' },
  { id: 17, name: 'Marwa Mohamed Anwar Ghamtail' },
  { id: 18, name: 'Rawan Salah J. Mohamed Haji' },
  { id: 19, name: 'Ruqaya Sayed Adel S. Alsammak' },
  { id: 20, name: 'Sayed Mohsen Kadhem Abdulla Ahmed Abdullah' },
  { id: 21, name: 'Zainab Ali Salman Abdullah Ahmed' },
  { id: 22, name: 'Fatema Hameed H. Ahmed' },
];

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Student Names API',
    routes: {
      index: 'GET /students',
      show: 'GET /students/:studentId',
      create: 'POST /students',
      update: 'PUT /students/:studentId',
      delete: 'DELETE /students/:studentId',
    },
  });
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:studentId', (req, res) => {
  const studentId = Number(req.params.studentId);

  const student = students.find((student) => {
    return student.id === studentId;
  });

  if (!student) {
    return res.status(404).json({
      message: 'Student not found.',
    });
  }

  res.json(student);
});

app.post('/students', (req, res) => {
  const newStudentName = req.body.name;

  if (!newStudentName) {
    return res.status(400).json({
      message: 'Please provide a student name.',
    });
  }

  const newStudent = {
    id: students.length + 1,
    name: newStudentName,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.put('/students/:studentId', (req, res) => {
  const studentId = Number(req.params.studentId);
  const updatedName = req.body.name;

  if (!updatedName) {
    return res.status(400).json({
      message: 'Please provide a student name.',
    });
  }

  const student = students.find((student) => {
    return student.id === studentId;
  });

  if (!student) {
    return res.status(404).json({
      message: 'Student not found.',
    });
  }

  student.name = updatedName;

  res.json(student);
});

app.delete('/students/:studentId', (req, res) => {
  const studentId = Number(req.params.studentId);

  const student = students.find((student) => {
    return student.id === studentId;
  });

  if (!student) {
    return res.status(404).json({
      message: 'Student not found.',
    });
  }

  students = students.filter((student) => {
    return student.id !== studentId;
  });

  res.json({
    message: 'Student deleted successfully.',
    deletedStudent: student,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});