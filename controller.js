const Card = require('./card_model');

const test = async (req, res) => {
   res.send('App is up and running...');
}

const create_card = async (req, res) => {
   try {
      let { body } = req;
      await Card.create(body);
      return res.status(201).send('OK');
   } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
   }
}

const card_details = async (req, res) => {
   try {
      let { card_number } = req.params;
      const card_details = await Card.findOne({ card_number });
      return res.status(201).json(card_details);
   } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
   }
}

const buy_milk = async (req, res) => {
   try {
      let { card_number } = req.body;
      let {available_quantity, transactions} = await Card.findOne({ card_number }, 'available_quantity transactions');

      if(available_quantity <= 0){
         return res.status(400).json({message: "card balance is ZERO"});
      }

      let todays_purchases = 0;
      if(todays_purchases >= 3){
         return res.status(400).json({message: "Todays limit reached on card"});
      }

      available_quantity = available_quantity - 1
      transactions.push(Date.now());
      await Card.updateOne({card_number}, {$set : { available_quantity, transactions}});

      return res.status(201).json({message: "successfully purchased"});
   } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
   }
}

module.exports = { test, create_card, card_details, buy_milk };