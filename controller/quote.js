
const {Quote} = require('../model/quote');


// CRUD operations
// Read all quotes
exports.getAllQuotes = async (req, res) => {
   try{
       const quotes = await Quote.find();
       res.status(200).json(quotes);
   }
   catch(err){
    res.status(400).json({err: err});
   }
};

// Read specific id quote
exports.getQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findById(id);
    if(!quote){
        throw "quote not found";
    }
    res.status(200).json(quote);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// Create quote
exports.addQuote = (req, res) => {
  try {
    const quote = new Quote(req.body);
    quote.save().then((doc)=> {
        res.status(200).json(doc);
    }).catch((err)=> {
        throw err;
    })
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// update quote with id
exports.updateQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findByIdAndUpdate(id, req.body, { returnDocument: "after",});
    res.status(200).json(quote);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// replace quote with id
exports.replaceQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findOneAndReplace({_id: id}, req.body, {
        returnDocument: "after",
      });
    res.status(200).json(quote);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// delete quote with id
exports.deleteQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findByIdAndDelete(id);
    res.status(200).json(quote);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
