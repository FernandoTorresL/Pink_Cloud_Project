
# Backend part

# Project: Pink Cloud Project (PlatziMaster Project)

## Description

Create Backend, Database, CRUD methods, API and deploy Backend

Backend finished and deployed in [https://pinkcloudproject.now.sh](https://pinkcloudproject.now.sh)

Get all the data: <https://pinkcloudproject.now.sh/api/employees>

---

## Testing Backend: How to install

### Clone this repo

You can use and change *<my_folder>* on this instruction to create a new folder

```bash
git clone git@github.com:FernandoTorresL/Pink_Cloud_Project.git <my_folder>
```

### Create your .env file (only .env.example on github)

```bash
cd Pink_Cloud_Project/backend
vi .env
```

Using **_.env.example_** file, you can set your own access credentials to database and configuration values.

### Install (backend folder)

```bash
cd Pink_Cloud_Project/backend
npm install
```

### Run dev

```bash
npm run dev
```

### Execute

```bash
npm run start
```

Finally, you can view the data project on
**localhost:<your_port>/api/employees**
on a browser.

Remember that you must use the same values that you define on your **_.env_** file.

---

## Visit production site, test API and endpoints

You can use the following endpoints on an app like Postman:

GET (all employees):
<https://pinkcloudproject.now.sh/api/employees>

GET (one employee by id):
<https://pinkcloudproject.now.sh/api/employees/5ebe54d38cab5e0007ac8493>

POST:
<https://pinkcloudproject.now.sh/api/employees>
with this body (raw and JSON):

```bash
{
  "first_name": "Fer",
  "last_name": "Torres",
  "job_title": "Administrative Officer",
  "salary": "9999",
  "job_type": "full time",
  "active": true,
  "avatar": "htts://robohash.org/nihilblanditiiset.bmp?size=50x50&set=set1"
}
```

PUT:
<https://pinkcloudproject.now.sh/api/employees/{id}>
with an body (raw and JSON)

Example:

```bash
{
  "first_name": "Fer",
  "last_name": "Torres",
}
```

DELETE:
<https://pinkcloudproject.now.sh/api/employees/{id}>

---

# Follow me

[fertorresmx.com](http://fertorresmx.com/)

## :globe_with_meridians: Twitter, Instagram: @fertorresmx
