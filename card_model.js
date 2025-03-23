const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
   card_number: {
      type: Number,
      required: true
   },
   card_holder: {
      type: String,
      required: true
   },
   unit: {
      type: Number,
      enum: [ 250, 500, 750, 1000 ],
      required: true,
   },
   price: {
      type: Number,
      required: true
   },
   available_quantity: {
      type: Number,
      default: 30
   },
   transactions: {
      type: [Date]
   }
})

cardSchema.index({ card_number: 1 }, { unique: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;