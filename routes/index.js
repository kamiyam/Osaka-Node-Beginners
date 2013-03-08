
exports.index = function(req, res){

    if ( req.session.userName  ) res.redirect("home");
    else res.render("index");
};

exports.home = function(req, res){
    var userName = req.session.userName;

    //名前未登録
    if( userName == null ){
        res.redirect("/");
        return;
    }

    if(req.session.todo == null ){
        var json = require( "../data.json");
        req.session.todo = json.todo;
    };

    res.render("home",{userName:userName, data: req.session.todo});

};

exports.login =  function(req,res){
    var username = req.body.user_name
    if ( username ){
        req.session.userName = username;
        res.redirect("/home");
    }
    else res.redirect("/");
};

exports.logout =  function(req,res){

    req.session.destroy();
    res.redirect("/");

};

exports.register = function(req,res){

    if ( req.body.title && req.body.desc ){
        var item = {
            title : req.body.title,
            desc : req.body.desc
        }
        var todo = req.session.todo;
        if (todo == null){
            todo = req.session.todo = new Array();
        }

        todo.push(item);
    }

    res.redirect("/home");

};

exports.delete = function(req,res){

    if( req.params.id ){
        var id = req.params.id;
        console.log(id);

        var todo = req.session.todo;
        if (todo == null){
            todo = req.session.todo = new Array();
        }
        else {
            todo.splice( id, 1 );
        }
    }

    res.redirect("/home");
};