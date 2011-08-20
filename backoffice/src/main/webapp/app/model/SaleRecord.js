Ext.define('AM.model.SaleRecord', {
    extend: 'Ext.data.Model',
    fields: ['id', 'station.name', 'partner.name','price', 'weight','totalAmount','createdAt']
});