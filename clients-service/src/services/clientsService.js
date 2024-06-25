const Client = require('../models/clientModel');

exports.getAllClients = async () => {
  return await Client.find();
};

// Other service methods...
