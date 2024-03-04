const bobby = (req, res)=>{
    res.send("My dogs name is bobby");
}

const robert = (req, res)=>{
    res.send("My name is robert");
}
module.exports = {
    bobby,
    robert
};