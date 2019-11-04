/* start here */
var _ = require("lodash");

module.exports = function(app){

	/*
	app.get("/", function(req, res){
		//res.send("Hello World!");
		res.json({hello: "world"});
	});
	*/

	_cats = [];

    //Create
    app.post("/cat", function (req, res) {
        _cats.push(req.body);
        res.send({
            info: "cat was created successfully"
        });
    });

    //Read
    app.get("/cat", function (req, res) {
        res.send(_cats);
        //res.json(_cats);
    });

    app.get("/cat/:id", function (req, res) {
        res.send(
            _.find(
                _cats, {
                    name: req.params.id
                }
            )
        );
    });

    //Update
    app.put('/cat/:id', function (req, res) {
        var index = _.findIndex(
            _cats,{
                name: req.params.id
            }
        );
        _.merge(_cats[index], req.body);
        res.json({info: 'cat updated successfully'});
    });

    //Delete
    app.delete('/cat/:id', function(req, res){
        _.remove(_cats, function(cat){
            return cat.name===req.params.id;
        });
        res.json({info: 'cat was removed successfully'});
    });
    
};