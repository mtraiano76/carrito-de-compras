const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let products = [ /*creamos la constante "productos" y abajo, el array con los productos a mostrar, esto en vez de codearlos en el html*/
  {
    id: 1,
    name: "Les Paul Standart",
    price: 235000,
    image: "https://images.ctfassets.net/m8onsx4mm13s/5ydbBtCoRU6qwSfJ4F3vuX/f24362168580315f16f33afc467e2689/33-mod-les-paul-custom-shop-historic.jpg",
    stock: 10,
  },
  {
    id: 2,
    name: "Les Paul Studio",
    price: 256000,
    image: "https://images.ctfassets.net/m8onsx4mm13s/6wv3qTmQWzQ5YTsWIFTh99/e46ef84437621d5c954f197d8f3b687c/33-mod-les-paul-custom-shop-modern.jpg",
    stock: 10,
  },
  {
    id: 3,
    name: "Les Paul Modern",
    price: 315000,
    image: "https://images.ctfassets.net/m8onsx4mm13s/65LqylebfByMlblAR7aRPf/0c5a92e371aa5fe9064724880e978c29/33-mod-les-paul-custom-shop-artist.jpg",
    stock: 10,
  },
  {
    id: 4,
    name: "Les Paul Custom",
    price: 456000,
    image: "https://images.ctfassets.net/m8onsx4mm13s/6ddegmLpl1Z7scaKSUQac7/b28b964e7e0d5deac45975108553f45d/33-mod-les-paul-standard-50s.jpg",
    stock: 10,
  },
  {
    id: 5,
    name: "Les Paul Gold Top",
    price: 325000,
    image: "https://images.ctfassets.net/m8onsx4mm13s/2HSIvHbshpmlOemrmm4lZC/482cf3726b4511521573099fc9360de9/50-mod-short-les-paul-modern.jpg",
    stock: 10,
  },
  {
    id: 6,
    name: "Les Paul Black Beauty",
    price: 561500,
    image: "https://images.ctfassets.net/m8onsx4mm13s/mx4BSDtm4BtIxOwTvAqSa/8890d5d1f4da5e10260713db9c7433a5/50-mod-short-les-paul-mod-collection2.jpg",
    stock: 10,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map((p) => ({ ...p }));
  ids.forEach((id) => {
    const product = procutsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});