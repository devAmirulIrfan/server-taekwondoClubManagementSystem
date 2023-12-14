const tshirtModel = require('../models/tshirtModel');

// Controller actions
async function getTshirt(req, res) {
  try {
    const tshirts = await tshirtModel.getAllTshirts();
    res.status(200).json(tshirts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching T-shirts.");
  }
}

async function insertTshirt(req, res) {
  const user = req.body;
  try {
    await tshirtModel.insertTshirt(user.name);
    const tshirts = await tshirtModel.getAllTshirts();
    res.status(200).json(tshirts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting a T-shirt.");
  }
}

async function updateTshirt(req, res) {
  const userId = req.params.id;
  const username = req.body.name;
  try {
    await tshirtModel.updateTshirt(userId, username);
    res.status(200).send("1 T-shirt record updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating a T-shirt.");
  }
}

async function deleteTshirt(req, res) {
  const userId = req.params.id;
  try {
    await tshirtModel.deleteTshirt(userId);
    res.status(200).send("1 T-shirt record deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting a T-shirt.");
  }
}

module.exports = { getTshirt, insertTshirt, updateTshirt, deleteTshirt };
