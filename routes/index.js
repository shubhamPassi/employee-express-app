const router = require("express").Router();
const dbData = require("../db/index");

router.get("/", (req, res) => {
    res.send(dbData.get());
});

router.post("/", (req, res) => {
    dbData.insert(req.body.name);
    res.send({ message: "Inserted Sucessfully" });
});

router.delete("/", (req, res) => {
    dbData.del(req.body.id);
    res.send({ message: "Deleted Sucessfully" });
});

router.put("/", (req, res) => {
    dbData.update(req.body.id, req.body.name);
    res.send({ message: "Updated Sucessfully" });
});

module.exports = router;
