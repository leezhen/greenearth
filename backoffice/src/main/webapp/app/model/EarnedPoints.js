Ext.define('AM.model.EarnedPoints', {
    extend: 'Ext.data.Model',
    fields: ['id', 'points','customer.name','inventoryType.name','createdAt']
});