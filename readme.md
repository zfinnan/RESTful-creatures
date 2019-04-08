# Cryptids Lab
---
## Prereqs:
* Layouts and Controllers Lab: https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md
* CRUD/RESTful Routing in Express Lesson: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/00readme.html
* GET & POST lesson/code-along: https://gawdiseattle.gitbooks.io/wdi/05-node-express/express-REST-crud/01get-post.html
--- 
## Goal
For this lab, you're going to build on the dinosaurs app built in the CRUD/RESTful Routing lesson.

---

## 1. Add the `cryptids.json` file to your `crud_dinosaurs` directory. (That file is included in this repo.)


## 2. Create the following routes:

| VERB | URL | Action (CRUD) | Description |
|------|-----|---------------|-------------|
| GET | /cryptids | Index (Read) | displays all cryptids |
| GET | /cryptids/1 | Show (Read) | displays the type and photo of a particular cryptid (id = 1) |
| POST | /cryptids | Create | creates an cryptid with the POST payload data |
| GET | /cryptids/edit/1 | Show(Read) | form for editting a specific cryptid (id = 1)|

**Hint:** You will need to have two folders inside your `views` directory, one for `dinosaurs` and one for `cryptids`. Make sure to change your `res.render()` statements accordingly! (Refer to the `faves_hates_app` from the [Layouts and Controllers Lab](https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md)for a reference.)

## 3. Reorganize your routes into controllers
(one controller for dinosaurs and one controller for cryptids)
