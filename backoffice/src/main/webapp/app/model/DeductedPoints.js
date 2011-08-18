Ext.define('AM.model.DeductedPoints', {
    extend: 'Ext.data.Model',
    fields: ['id', 'points','customer.name','reason.name','createdAt']
});