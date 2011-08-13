Ext.define('AM.model.InventoryLog', {
    extend: 'Ext.data.Model',
    fields: ['id', 'customer.name', 'type.name','weight','station.name','createdAt']
});