const mongoose = require("mongoose");

const nominalSchema = mongoose.Schema({
  coinQuantity: {
    type: Number,
    required: [true, "Jumlah koin harus diisi"],
    default: 0,
  },
  coinName: {
    type: String,
    required: [true, "Nama koin harus diisi"],
  },
  price: {
    type: Number,
    required: [true, "Harga koin harus diisi"],
    default: 0,
  },
});

module.exports = mongoose.model("Nominal", nominalSchema);
