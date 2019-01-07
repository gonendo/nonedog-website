exports.home = function(req, res){
    res.render('home', {layoutCss : css['style.css']});
};