# Prehistoric Creatures Lab
---
## Prereqs:
* Layouts and Controllers Lab: https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md
* CRUD/RESTful Routing in Express Lesson: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/00readme.html
* GET & POST lesson/code-along: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/01get-post.html
--- 
For this lab, you're going to add a prehistoric creatures section to the `crud_dinosaurs` app.
---

## 1. Add the `prehistoric_creatures.json` file to your `crud_prehistoric creatures` directory. (That file is included in this repo.)


## 2. Create the following routes:

| VERB | URL | Action (CRUD) | Description |
|------|-----|---------------|-------------|
| GET | /prehistoric creatures | Index (Read) | displays all prehistoric creatures |
| GET | /prehistoric creatures/1 | Show (Read) | displays the type and photo of a particular prehistoric creature (id = 1) |
| POST | /prehistoric creatures | Create | creates an prehistoric creature with the POST payload data |
| GET | /prehistoric creatures/edit/1 | Show(Read) | form for editting a specific prehistoric creature (id = 1)|
| PUT | /prehistoric creatures/1 | Update | updates the data for a specific prehistoric creature (id = 1) |
| DELETE | /prehistoric creatures/1 | Delete (Destroy) | deletes the prehistoric creature with the specified id (1) |

## 3. Reorganize your routes into controllers
( one controller for dinosaurs and one controller for prehistoric creatures)
