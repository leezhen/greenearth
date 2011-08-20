Ext.define('AM.model.Stock', {
    extend: 'Ext.data.Model',
    fields: ['id', 'type.name', 'weight','station.name']
});