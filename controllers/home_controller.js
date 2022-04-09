

module.exports.home = function(req,res){
    return res.render('createtasks',{
        title:'TODO APP'
    });
}