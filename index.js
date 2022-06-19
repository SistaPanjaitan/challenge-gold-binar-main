require('dotenv').config();
const express = require ('express');
const app = express();
const itemsRoutes = require ('./routes/items-routes')
const ordersRoutes = require ('./routes/orders-routes')
const usersRoutes = require ('./routes/users-routes')

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get ('/', (req, res)=> res.send('Server is running'));

app.use ('/items', itemsRoutes);
app.use ('/orders', ordersRoutes);
app.use ('/users', usersRoutes);


app.listen(PORT, ()=> {
    console.log('Server is listening on PORT:', PORT)
})