const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.redirect("indexllamada.html");
})

module.exports = router;