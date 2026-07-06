const express = require('express');

const app = express();

app.use(express.json());

const studentNames = [
  'Aziz Mohamed A. Makhlooq',
  'Abdullah Mohammed suleman A.butt',
  'Abeer Ahmed Abdulrahman',
  'Ali Husain Mohammed Saeed Abdul Alaliwat',
  'Ali Jaafar Alasfoor',
  'Ali Saleh Mahdi Saleh Ali Abdulla',
  'Bayan Abdulla Ali Markhoos',
  'Fadhel Sayed Abbas hassan hashem Mohamed',
  'Hasan Ali Jasim',
  'Hawra Abdullah Ali Mohamed Ali Markhoos',
  'Hawra Sayed Abbas Ali Ebrahim Sharaf',
  'Husain Ali Abdulmohsen Ateya Ali Abdulrasool',
  'Husain Ali Isa Abdulnabi Jasim Almajed',
  'Hussain Zuhair Almutawa',
  'Jassim Mohamed A. Alawainati',
  'Manar Alhamad',
  'Marwa Mohamed Anwar Ghamtail',
  'Rawan Salah J. Mohamed Haji',
  'Ruqaya Sayed Adel S. Alsammak',
  'Sayed Mohsen Kadhem Abdulla Ahmed Abdullah',
  'Zainab Ali Salman Abdullah Ahmed',
  'Fatema Hameed H. Ahmed',
];

let students = studentNames.map((name, index) => {
  return {
    id: index + 1,
    name: name,
    favoriteFood: 'Not added yet',
    favoriteEmoji: '🙂',
  };
});

let nextStudentId = students.length + 1;

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

// INDEX
app.get('/students', (req, res) => {
  res.json(students);
});

// SHOW
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

// CREATE
app.post('/students', (req, res) => {
  const newStudentName = req.body.name;

  if (!newStudentName) {
    return res.status(400).json({
      message: 'Please provide a student name.',
    });
  }

  const newStudent = {
    id: nextStudentId,
    name: newStudentName,
    favoriteFood: req.body.favoriteFood || 'Not added yet',
    favoriteEmoji: req.body.favoriteEmoji || '🙂',
  };

  nextStudentId++;

  students.push(newStudent);

  res.status(201).json(newStudent);
});

// UPDATE
app.put('/students/:studentId', (req, res) => {
  const studentId = Number(req.params.studentId);

  const student = students.find((student) => {
    return student.id === studentId;
  });

  if (!student) {
    return res.status(404).json({
      message: 'Student not found.',
    });
  }

  if (!req.body.name && !req.body.favoriteFood && !req.body.favoriteEmoji) {
    return res.status(400).json({
      message: 'Please provide a name, favoriteFood, or favoriteEmoji.',
    });
  }

  if (req.body.name) {
    student.name = req.body.name;
  }

  if (req.body.favoriteFood) {
    student.favoriteFood = req.body.favoriteFood;
  }

  if (req.body.favoriteEmoji) {
    student.favoriteEmoji = req.body.favoriteEmoji;
  }

  res.json(student);
});

// DELETE
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