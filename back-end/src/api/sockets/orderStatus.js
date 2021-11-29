const { sale: Sale } = require('../../database/models');

module.exports = (io) =>
  io.on('connection', (socket) => {
    console.log(socket.id, ': I\'m here now. Hello!');
    socket.on('updateOrderState', async ({ id, orderState }) => {
        const hasSale = await Sale.findOne({ where: { id } });

        if (!hasSale) {
          return 'error';
        }

        await Sale.update({ status: orderState }, { where: { id } });

        const { dataValues: sale } = await Sale.findOne({ where: { id } });

        if (sale) {
        console.log('updated  Order', sale);
        io.emit('updateOrderState', sale);
      }
  });
});
