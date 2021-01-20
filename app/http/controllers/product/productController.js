function productController() {
    return {
        detail(req, res) {
            console.log(req.body);
            res.render('product/productDetails')
        }
    }
}

module.exports = productController