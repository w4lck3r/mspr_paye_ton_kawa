const ClientsService = require('../services/clientsService');

exports.getAllClients = async (req, res) => {
  const clients = await ClientsService.getAllClients();
  res.json(clients);
};

// Other controller methods...
