Ext.define('AM.model.PointRule', {
    extend: 'Ext.data.Model',
    fields: ['id', 'pointsType.name','inventoryType.name', 'quantity', 'points','createdAt','modifiedAt','createdBy','modifiedBy']
});