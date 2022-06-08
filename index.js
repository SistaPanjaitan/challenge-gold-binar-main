const express = require ('express');
const app = express();
const itemsRoutes = require ('./routes/items-routes')
const postsRoutes = require ('./routes/posts-routes')
const usersRoutes = require ('./routes/users-routes')

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get ('/', (req, res)=> res.send('Server is running'));

app.use ('/items', itemsRoutes);
app.use ('/posts', postsRoutes);
app.use ('/users', usersRoutes);


app.listen(PORT, ()=> {
    console.log('Server listening on PORT:', PORT)
})