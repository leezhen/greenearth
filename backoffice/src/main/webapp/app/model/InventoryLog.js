Ext.define('AM.model.InventoryLog', {
    extend: 'Ext.data.Model',
    fields: ['id', 'type.name','weight','station.name','createdAt']
});