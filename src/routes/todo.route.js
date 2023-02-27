const { Router } = requiere('express');
const TodoModel = requiere('../models/todos.route.js');

const router = Router();

router.get('/api/v1/todos', async (req, res) => {
    try{
        const toDos = await TodoModel.findAll();
        res.json(toDos);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});


router.get('/api/v1/todos', async (req, res) => {
    try{
        const toDos = await TodoModel.findAll();
        res.json(toDos);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})


module.exports = router;