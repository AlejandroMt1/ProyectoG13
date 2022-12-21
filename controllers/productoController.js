const producto = require("../models/producto");

exports.leerProductoHome = async ( req, res ) => {
    try{
        const producto1 = await producto.find();
        res.json({ producto1 });
    }catch(error){
        console.log(error);
    }


}

exports.leerProducto = async (req, res) => {
    const {id} = req.params;
    const producto1 = await producto.find().where("categoriaId").equals(id);
    res.json(producto1);
}
exports.crearProducto = async ( req, res ) => {
   
    try{
        const producto1 = new producto(req.body);
        producto1.save();
        res.json(producto1);
    }catch(error){
        console.log(error);
    }
}

exports.actualizarProducto = async ( req, res ) => {
    //res.json({ msg : "ejecuto actualizar Producto"});
    const { id } = req.params;

    const producto1 = await producto.find().where("productoId").equals(id);

    if(!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.categoriaId = req.categoria || producto.categoriaId;
    producto.save();
    res.json({ producto1 });
}
exports.borrarProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto borrar Producto"});
}