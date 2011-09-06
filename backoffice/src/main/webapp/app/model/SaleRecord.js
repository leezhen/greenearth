Ext.define('AM.model.SaleRecord', {
    extend: 'Ext.data.Model',
    fields: ['id', 'station.name', 'partner.name','inventoryType.name','price', 'weight','totalAmount','createdAt']
});