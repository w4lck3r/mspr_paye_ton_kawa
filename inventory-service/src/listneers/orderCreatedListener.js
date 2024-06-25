const nats = require('../pubsub/nats');
const InventoryService = require('../services/inventoryService');

nats.subscribe('order.created', async (msg) => {
  const order = JSON.parse(msg);

  // Mettre à jour l'inventaire en fonction de la commande créée
  await InventoryService.updateInventory(order);
});
