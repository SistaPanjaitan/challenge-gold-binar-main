class itemsController {
    static addItem(req, res) {
        const itemName = req.body.itemName;

        return res.status(201).json({
            message : "Berhasil menambahakan item dengan nama " + itemName
        })
    }

    static getByID (req, res) {
        return res.status(200).json({
            message : "Berhasil mendapatkan item",
            data : {
                id: req.params.id,
                name : "Samsung Galxy S22",
                prices : 20_000_000
            }
        })
    }

    static getAllItems (req, res) {
        return res.status(200).json({
            message: "Berhasil mendapatkan items",
            data: [
                {id: 1, name: 'Samsung Galaxy S22' },
                {id: 2, name: 'Samsung Galaxy Buds' }
            ]
        })
    }

    static updateItem (req, res) {
        const itemID = req.params.id;
        const price = req.body.price;

        return res.status(200).json({
            message : "Berhasil mengubah item dengan id " + itemID,
            newPrice : price
        })
    }
}

module.exports = itemsController;