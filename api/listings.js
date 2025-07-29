
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const filePath = path.join(__dirname, '../data/listings.json');
  const listings = JSON.parse(fs.readFileSync(filePath));

  if (req.method === 'GET') {
    return res.status(200).json(listings);
  }

  if (req.method === 'POST') {
    const newItem = req.body;
    newItem.id = Date.now().toString();
    listings.push(newItem);
    fs.writeFileSync(filePath, JSON.stringify(listings, null, 2));
    return res.status(201).json(newItem);
  }

  res.status(405).end();
};
