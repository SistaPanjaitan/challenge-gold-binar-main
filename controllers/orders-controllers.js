const { orders: OrderModel } = require('../models');
const { items: ItemModel } = require('../models');
const { orders : Order } = require('../models')

exports.getAllOrders = (req, res) => {
    orders.findAll().then((data) => {
        res.send(data);
    });
};


exports.getOrder = (req, res) => {
    orders.findByPk(req.params.id).then((data) => {
        res.send(data);
    });
};


exports.createOrder = async (req, res) => {
  try {
    const orderItem = await ItemModel.findOne({
      where: {
        id: req.body.items_id
      }
    });

    const newOrder = {
      users_id: req.body.users_id,
      items_id: req.body.items_id,
      order_qty: req.body.order_qty,
      amount: orderItem.dataValues.price * req.body.order_qty,
    }
  
    await OrderModel.create(newOrder);
  
    return res.status(201).json({
      message: 'Berhasil membuat order'
    })
  } catch (err) {
    return res
      .status(err.status ||  500)
      .json({ message: err.message || 'Internal server error' })
  }
}

exports.updateOrder = async (req, res) => {
    try {
        await Order.update({ order_qty: req.body.order_qty }, {
          where: {
            id: req.body.id
          }
        });
      
        return res.status(200).json({
          message: 'Berhasil mengubah order'
        })
      } catch (err) {
        return res
          .status(err.status || 500)
          .json({
            message: err.message || 'Internal server error.',
          })
      }
    }

exports.deleteOrder = async (req, res) => {
    try {
        if (!req.body.id) throw { status: 400, message: 'parameter id tidak boleh kosong' };
  
        await orders.destroy({
          where: { id: req.body.id }
        });
  
        return res.status(200).json({
          message: 'Berhasil menghapus order dengan id ' + req.body.id
        })
      } catch (err) {
        return res
          .status(err.status ||  500)
          .json({ message: err.message || 'Internal server error' })
      }
    }
  
  