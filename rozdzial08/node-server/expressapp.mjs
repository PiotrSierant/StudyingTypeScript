import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Pierwsze oprogramowanie pośrednie.");
  next();
});

app.use(router);
router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "tomek",
    },
    {
      id: 2,
      username: "janek",
    },
    {
      id: 3,
      username: "lidia",
    },
  ];
  console.log(req.query.userid);
  const user = users.find((usr) => usr.id == req.query.userid);
  res.send(`Użytkownik: ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "administatorzy",
    },
    {
      id: 2,
      groupname: "użytkownicy",
    },
    {
      id: 3,
      groupname: "pracownicy",
    },
  ];
  const group = groups.find((grp) => grp.id == req.body.groupid);
  res.send(`Grupa: ${group} ${req.body}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Serwer Node Express został uruchomiony!");
});
