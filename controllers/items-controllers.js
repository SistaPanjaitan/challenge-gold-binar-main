const { items : Item } = require('../models');
const { Op } = require("sequelize");

class ItemController {
  static async addItem(req, res) {
    try {
      if (!req.body.name) throw {
        status: 400,
        message: 'Parameter name tidak boleh kosong.'
      }

      if (!req.body.price) throw {
        status: 400,
        message: 'Parameter price tidak boleh kosong.'
      }

      const newItem = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        brand: req.body.brand,
      }
  
      await items.create(newItem);
  
      return res.status(201).json({
        message: 'Berhasil menambahkan item dengan nama ' + newItem.name
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }

  static async getByID(req, res) {
    const id = req.params.id;
    try {
      const Item  = await items.findbyPk(id);
      return res.status(200).json({
        msg : 'Item ditemukan',
        data : items,
      });
    } catch (err) {
      console.log(err);
    }
    res.send(id)
  }

  static async getAllItems(req, res) {
    const rows = await items.findAll({
      limit: 5,
      order: [
        ['id']
      ],
      where: {
        price: {
          [Op.between]: [20, 50]
        }
      }
    });

    return res.status(200).json({
      message: 'Berhasil mendapatkan items',
      data: rows
    })
  }

  static async updateItem(req, res) {
    try {
      await Item.update({ category: req.body.category }, {
        where: {
          id: req.body.id
        }
      });
    
      return res.status(200).json({
        message: 'Berhasil mengubah category item.'
      })
    } catch (err) {
      return res
        .status(err.status || 500)
        .json({
          message: err.message || 'Internal server error.',
        })
    }
  }

  static async deleteItem(req, res) {
    try {
      if (!req.body.id) throw { status: 400, message: 'parameter id tidak boleh kosong' };

      await items.destroy({
        where: { id: req.body.id }
      });

      return res.status(200).json({
        message: 'Berhasil menghapus item dengan id ' + req.body.id
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }
}

module.exports = ItemController;