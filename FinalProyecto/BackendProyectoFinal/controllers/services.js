const express = require('express');
const router = express.Router();
const pkmn = [{
    "name": "Pikachu",
    "id": 25
}]

router.get('/pkmn',(req,res) => {
    console.log(pkmn)
})


module.exports = router ;