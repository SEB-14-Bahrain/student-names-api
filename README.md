# Docs for Students API

## About

This API has one resource: **students**.

A **resource** is the main type of data our API works with. In this API, each student has:

```js
{
  id: 1,
  name: "Student Name"
}
```

This API sends back **JSON**, not HTML.

---

## RESTful Routing Chart

| HTTP Method | Path/Endpoint          | CRUD Operation    | Route Name | Has Data Payload? | Description                   |
| ----------- | ---------------------- | ----------------- | ---------- | ----------------- | ----------------------------- |
| GET         | `/students`            | Read all students | `index`    | No                | Returns all students.         |
| GET         | `/students/:studentId` | Read one student  | `show`     | No                | Returns one specific student. |
| POST        | `/students`            | Create a student  | `create`   | Yes               | Adds a new student.           |
| PUT         | `/students/:studentId` | Update a student  | `update`   | Yes               | Updates one specific student. |
| DELETE      | `/students/:studentId` | Delete a student  | `delete`   | No                | Removes one specific student. |

> For this API, we are not using `new` or `edit` routes because those usually render HTML forms. In Postman, we send JSON directly instead.

---

## 1. Index Route

### Request

```text
GET /students
```

### What it does

Returns all students.

### Postman example

```text
GET http://localhost:3000/students
```

### Example response

```json
[
  {
    "id": 1,
    "name": "Aziz Mohamed A. Makhlooq"
  },
  {
    "id": 2,
    "name": "Abdullah Mohammed suleman A.butt"
  }
]
```

---

## 2. Show Route

### Request

```text
GET /students/:studentId
```

### What it does

Returns one specific student.

### Postman example

```text
GET http://localhost:3000/students/1
```

### Example response

```json
{
  "id": 1,
  "name": "Aziz Mohamed A. Makhlooq"
}
```

---

## 3. Create Route

### Request

```text
POST /students
```

### What it does

Creates a new student.

### Postman example

```text
POST http://localhost:3000/students
```

### Body

In Postman:

1. Go to **Body**
2. Select **raw**
3. Select **JSON**
4. Add this:

```json
{
  "name": "New Student"
}
```

### Example response

```json
{
  "id": 23,
  "name": "New Student"
}
```

---

## 4. Update Route

### Request

```text
PUT /students/:studentId
```

### What it does

Updates a specific student.

### Postman example

```text
PUT http://localhost:3000/students/23
```

### Body

```json
{
  "name": "Updated Student Name"
}
```

### Example response

```json
{
  "id": 23,
  "name": "Updated Student Name"
}
```

---

## 5. Delete Route

### Request

```text
DELETE /students/:studentId
```

### What it does

Deletes a specific student.

### Postman example

```text
DELETE http://localhost:3000/students/23
```

### Example response

```json
{
  "message": "Student deleted successfully.",
  "deletedStudent": {
    "id": 23,
    "name": "Updated Student Name"
  }
}
```

---

# Postman Practice Tasks

Students can try these in order:

```text
GET /students
GET /students/3
POST /students
PUT /students/23
DELETE /students/23
GET /students
```

For `POST` and `PUT`, remember to send JSON in the request body.

Example:

```json
{
  "name": "Test Student"
}
```