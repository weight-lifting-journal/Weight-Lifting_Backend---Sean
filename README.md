# Weight Lifting Journal

## NAVIGATION

[Register User](#register) | [Login](#login) | [Get All Workout Journals](#get-workouts) | [Get Single Workout Journal](#get-single-workout) | [Add A Workout Journal](#add-workout) | [Edit A Workout Journal](#edit-workout) | [Delete A Workout Journal](#delete-workout) | [Get an Exercise Card](#get-exercise) | [Add an Exercise Card](#add-exercise) | [Edit an Exercise Card](#edit-exercise) | [Delete an Exercise Card](#delete-exercise) | [Examples of Headers](#headers-examples) | [Project Reference Links](#ref-links)

## Project Outline

- Pitch: It's hard to keep track of how many reps you can do each time, or how much you usually deadlift. This app keeps it all organized and tracked for you.

- MVP: Users can log in and can create, review, update, and delete data on their workouts. Can create a name of the exercise, amount lifted, reps completed, date, and region of the body exercise targets.

- Stretch: Ability to upload progress pics by date.

---

## REGISTER <a name="register"></a>

### Register a User

_Method URL: /users/register_

_HTTP method: [POST]_

### Headers

| name         | type   | required | description              |
| ------------ | ------ | -------- | ------------------------ |
| Content-Type | String | Yes      | Must be application/json |

### Body

| name     | type   | required | description    |
| -------- | ------ | -------- | -------------- |
| username | String | Yes      | Must be unique |
| email    | String | Yes      | Must be unique |
| password | String | Yes      |                |

_example:_

```
{
  username: "john doe",
  password: "password123",
  email: "johndoe@email.com"
}
```

### Response

**200 (OK)**

> If you successfully register a user the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXoE",
  "user": {
    "id": 1,
    "username": "john doe"
  }
}
```

**400 (Bad Request)**

> If you send in invalid fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

---

## LOGIN <a name="login"></a>

### Logs a user in

_Method Url: /users/login_

_HTTP method: [POST]_

### Headers

| name         | type   | required | description              |
| ------------ | ------ | -------- | ------------------------ |
| Content-Type | String | Yes      | Must be application/json |

### Body

| name     | type   | required | description                                                        |
| -------- | ------ | -------- | ------------------------------------------------------------------ |
| email    | String | Yes      | Must match an email in the database                                |
| password | String | Yes      | Must match a password in the database corresponding to above email |

_example:_

```
{
  email: "johndoe@email.com",
  password: "password123"
}
```

### Response

**200 (OK)**

> If you successfully login, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXoE",
  "user": {
    "id": 1,
    "username": "john doe",
  }
}
```

**400 (Bad Request)**

> If you send in invalid fields or the passwords do not match, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

**404 (Not Found)**

> If you send in an email address that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "error": true,
  "message": "The requested content does not exist."
}
```

---

# WORKOUT JOURNAL ROUTES

## GET WORKOUT JOURNALS <a name="get-workouts"></a>

### Retrieves an array of users workouts

_Method URL: /workouts_

_HTTP method: [GET]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

### Response

**200 (OK)**

> will send back an array of objects like below

```
[
  {
    "id": 1,
    "workout": {
      "date": "Feb 12, 2019",
      "region": "Upper Body"
    },
    "exercises": [
      {
        "exerciseId": 1,
        "workoutId" : 1,
      "name": "bench press",
      "weight": "200lb",
      "reps": 5,
      "sets": 3,
    },
    {
      "exerciseId": 2,
      "workoutId" : 1,
      "name": "curls",
      "weight": "60lb",
      "reps": 10,
      "sets": 3,
    }
    ]
  },
  {
    "id": 2,
    "workout": {
      "date": "Feb 13, 2019",
      "region": "legs"
    },
    "exercises": [
      {
        "exerciseId": 3,
        "workoutId" : 2,
      "name": "leg press",
      "weight": "280lb",
      "reps": 7,
      "sets": 3,
    },
    {
      "exerciseId": 4,
      "workoutId" : 2,
      "name": "squats",
      "weight": "180lb",
      "reps": 12,
      "sets": 3,
    }
    ]
  }
]
```

---

## GET SPECIFIC WORKOUT JOURNAL <a name="get-single-workout"></a>

### Gets a workout journal with a specified ID

_Method Url: /workouts/:workoutId_

_HTTP method: [GET]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | No       | token       |

|

### Parameters

| name      | type | required | description            |
| --------- | ---- | -------- | ---------------------- |
| workoutId | Int  | Yes      | Id of specific workout |

### Response

**200 (OK)**

> If you send a valid workout id with a valid authorization token, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
 {
    "id": 1,
    "date": "Feb 12, 2019",
    "region": "upper body",
    "exercises": [
      {
        "exerciseId": 1,
        "workoutId": 1,
        "name": "bench press",
        "weight": "200lb",
        "reps": 5,
        "sets": 3,
     },
      {
        "exerciseId": 2,
        "workoutId": 1,
        "name": "curls",
        "weight": "60lb",
        "reps": 10,
        "sets": 3,
      }
    ]
  }
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

{
"error": true,
"message": "The requested content does not exist."
}

---

## POST A WORKOUT JOURNAL <a name="add-workout"></a>

### Adds a new workout journal

_Method Url: /workouts_

_HTTP method: [POST]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

### Body

| name   | type   | required | description    |
| ------ | ------ | -------- | -------------- |
| date   | String | Yes      | string of nums |
| region | String | Yes      |                |

_example:_

```
{
  date: "Feb 2 2019",
  region: "upper body"
}
```

### Response

**200 (OK)**

> If you successfully create a new workout the endpoint will return an HTTP response with a status code 200 and a body containing the newly created workouts id as shown below.

```
[
  12
]
```

**400 (Bad Request)**

> If you send in invalid fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

**401 (Unauthorized)**

> If you are not logged in, then endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

---

## EDIT SPECIFIC WORKOUT JOURNAL <a name="edit-workout"></a>

### Edits one or more details of a specific workout journal created by the user.

_Method Url: /workouts/:workoutId/update_

_HTTP method: [PUT]_

### Headers

| name          | type   | required | description              |
| ------------- | ------ | -------- | ------------------------ |
| Content-Type  | String | Yes      | Must be application/json |
| Authorization | String | Yes      | token                    |

### Parameters

| name      | type | required | description            |
| --------- | ---- | -------- | ---------------------- |
| workoutId | Int  | Yes      | Id of specific workout |

### Body

| name   | type   | required | description         |
| ------ | ------ | -------- | ------------------- |
| date   | String | No       | New date of workout |
| region | String | No       | New region workout  |

**example:**

```
{
  "workoutId": 2,
  date: "Feb 2 2019",
  region: "legs",
}
```

### Response

**200 (OK)**

> If the request is successful, the server will return an HTTP response with a status code 200 and the id of the updated workout.

```
[
  12
]
```

**400 (Bad Request)**

> If you send in invalid fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

**401 (Unauthorized)**

> If you are not logged in the endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "error": true,
  "message": "The requested content does not exist."
}
```

---

## DELETE WORKOUT JOURNAL <a name="delete-workout"></a>

### Deletes workout journal with specific id.

_Method Url: /workouts/:workoutId_

_HTTP method: [DELETE]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

### Parameters

| name      | type | required | description            |
| --------- | ---- | -------- | ---------------------- |
| workoutId | Int  | Yes      | Id of specific workout |

### Response

**200 (OK)**

> If the request is successful, the server will return an HTTP response with a status code 200 and the following message.

```
{
    "message": "Workout successfully deleted."
}
```

**401 (Unauthorized)**

If you are not logged in the endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "error": true,
  "message": "The requested content does not exist."
}
```

---

## GET SPECIFIC EXERCISE CARD <a name="get-exercise"></a>

### Gets a exercise card with a specified ID

_Method Url: /workouts/exercises/:exerciseId_

_HTTP method: [GET]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

|

### Parameters

| name       | type | required | description            |
| ---------- | ---- | -------- | ---------------------- |
| exerciseId | Int  | Yes      | Id of specific workout |

### Response

**200 (OK)**

> If you send a valid workout id with a valid authorization token, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
      {
        "exerciseId": 1,
        "workoutId": 1,
        "name": "bench press",
        "weight": "200lb",
        "reps": 5,
        "sets": 3,
     }
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

{
"error": true,
"message": "The requested content does not exist."
}

---

## POST AN EXERCISE CARD <a name="add-exercise"></a>

### Adds a new exercise card

_Method Url: /workouts/exercises_

_HTTP method: [POST]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

### Body

| name      | type   | required | description |
| --------- | ------ | -------- | ----------- |
| workoutId | Int    | Yes      |             |
| name      | String | Yes      |             |
| reps      | Int    | Yes      |             |
| sets      | Int    | Yes      |             |
| weight    | String | Yes      |             |

_example:_

```
{
  workoutId: 1,
  name: "curls",
  reps: 10,
  sets: 3,
  weight: "75lbs"
}
```

### Response

**200 (OK)**

> If you successfully create a new workout the endpoint will return an HTTP response with a status code 200 and a body containing the newly created workouts id as shown below.

```
[
  12
]
```

**400 (Bad Request)**

> If you send in invalid fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

**401 (Unauthorized)**

> If you are not logged in, then endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

---

## EDIT SPECIFIC EXERCISE CARD <a name="edit-exercise"></a>

### Edits one or more details of a specific exercise card created by the user.

_Method Url: /workouts/exercises/:exerciseId_

_HTTP method: [PUT]_

### Headers

| name          | type   | required | description              |
| ------------- | ------ | -------- | ------------------------ |
| Content-Type  | String | Yes      | Must be application/json |
| Authorization | String | Yes      | token                    |

### Parameters

| name       | type | required | description            |
| ---------- | ---- | -------- | ---------------------- |
| exerciseId | Int  | Yes      | Id of specific workout |

### Body

| name      | type   | required | description |
| --------- | ------ | -------- | ----------- |
| workoutId | Int    | Yes      |             |
| name      | String | Yes      |             |
| reps      | Int    | Yes      |             |
| sets      | Int    | Yes      |             |
| weight    | String | Yes      |             |

_example:_

```
{
  workoutId: 1,
  name: "curls",
  reps: 10,
  sets: 3,
  weight: "75lbs"
}
```

### Response

**200 (OK)**

> If the request is successful, the server will return an HTTP response with a status code 200 and the id of the updated workout.

```
[
  12
]
```

**400 (Bad Request)**

> If you send in invalid fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
  "error": true,
  "message": "There was a problem with your request."
}
```

**401 (Unauthorized)**

> If you are not logged in the endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "error": true,
  "message": "The requested content does not exist."
}
```

---

## DELETE EXERCISE CARD <a name="delete-exercise"></a>

### Deletes workout journal with specific id.

_Method Url: /workouts/exercises/:exerciseId_

_HTTP method: [DELETE]_

### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | String | Yes      | token       |

### Parameters

| name       | type | required | description             |
| ---------- | ---- | -------- | ----------------------- |
| exerciseId | Int  | Yes      | Id of specific exercise |

### Response

**200 (OK)**

> If the request is successful, the server will return an HTTP response with a status code 200 and the following message.

```
{
    "message": "Workout successfully deleted."
}
```

**401 (Unauthorized)**

If you are not logged in the endpoint will return an HTTP response with a status code 401 and a body as below.

```
{
  "error": true,
  "message": "You are unauthorized to view the content."
}
```

**404 (Not Found)**

> If you pass in an id that does not match one in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "error": true,
  "message": "The requested content does not exist."
}
```

---

## HEADERS OBJECT AND AXIOS CALL SAMPLES <a name="headers-examples"></a>

> When sending requests to an endpoint requiring authorization, headers bearing the JSON Web Token must be present as seen in the 2 examples below

### AUTHORIZED GET AXIOS EXAMPLE

```
const headersObj = {
  headers: {
    Authorization: JWT_token
  }
}

axios.get(`https://${API_URL}/workouts`, headersObj)
  .then(({data}) => this.setState({workouts: data}))
  .catch(err => console.log("error", err))
```

### AUTHORIZED POST AXIOS EXAMPLE

```
const userObj = {
  headers: {
    Authorization: JWT_token
  },
  body: {
    username: "john doe",
    email: "johndoe@email.com",
    password: "password123"
  }
}

axios.post(`https://${API_URL}/workouts`, userObj)
  .then((res) => console.log(res))
  .catch(err => console.log("error", err))
```

> alternate axios call syntax below may also be used

### AUTHORIZED GET AXIOS EXAMPLE 2

```
axios({
  method: "get",
  url: `https://${API_URL}/workouts`,
  headers: {
    Authorization: token
  }
})
  .then(({data}) => this.setState({workouts: data}))
  .catch(err => console.log("error", err))
```

### AUTHORIZED POST AXIOS EXAMPLE 2

```
axios({
  method: "post",
  url: `https://${API_URL}/workouts`,
  headers: {
    Authorization: token
  },
  body: {
    username: "john doe",
    email: "johndoe@email.com",
    password: "password123"
  }
})
  .then((res) => console.log(res))
  .catch(err => console.log("error", err))
```

---

### PROJECT REFERENCE LINKS <a name="ref-links"></a>

[Rubric](https://docs.google.com/spreadsheets/d/1sFgvt8HtqNCw32YC8Wvrgrdb61oEWPTsBUrvOL3rAGQ/edit#gid=0)
[Policies and Procedures](https://www.notion.so/Policies-and-Procedures-19e679fc1a284b668d8132dd8d7228cd)
[Monday.coms Board](https://lambdaschool.monday.com/boards/165411499)
