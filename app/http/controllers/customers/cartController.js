const { json } = require("express")
function cartController() {
    return {
        index (req, res){
          res.render('customers/cart')
        },
        update(req,res){         
          // Create cart if theres no cart in the session
          if(!req.session.cart) {
            req.session.cart = {
              items:{},
              totalQty:0,
              totalPrice:0
            }
          }
          let cart = req.session.cart
            
          //check if item does not exist in cart.
          if(!cart.items[req.body._id]){
           cart.items[req.body._id]={
             item:req.body,
             qty:1
           }
           cart.totalQty=cart.totalQty + 1
           cart.totalPrice = cart.totalPrice + req.body.price
          } else { // if item exist in the cart
            cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
            cart.totalQty = cart.totalQty + 1
            cart.totalPrice = cart.totalPrice + req.body.price
          }
          return res.json({ totalQty: req.session.cart.totalQty })
        }
    }
}

module.exports = cartController