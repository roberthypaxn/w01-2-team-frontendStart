const bobby = (req, res)=>{
    res.send("My dogs name is bobby");
}

const robert = (req, res)=>{
    res.send("My name is robert");
}

const queen = (req, res)=>{
    res.send("I love my dog");
}
module.exports = {
    bobby,
    robert,
    queen
};