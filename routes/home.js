exports.home = function(req, res, next){
    const data = {
    };
    res.renderVue('home.vue', data, req.vueOptions);
};