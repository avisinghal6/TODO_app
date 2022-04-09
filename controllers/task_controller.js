const Task= require('../models/tasks_schema');



module.exports.addTask= function(req,res){
    Task.create(req.body, function(err, task){
        if(err){
            console.log('error in creating task');
            return;
        }
        
        return res.redirect('/');
    });
    
}

module.exports.displayTask= function(req,res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log(err);
            return;
        }

        
        return res.render('createtasks',{
            tasks: tasks
        });
    })
}

module.exports.deleteTask= function(req,res){
    let taskId= req.params.id;
    Task.findByIdAndDelete(taskId, function(err,deletedTask){
        if(err){
            console.log(err);
        }
        else{
            
            return res.redirect('back');
        }
    })
}