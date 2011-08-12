Ext.define('AM.model.PointRule', {
    extend: 'Ext.data.Model',
    fields: ['id', 'pointsType.name','inventoryType.name', 'weight', 'points','createdAt','modifiedAt','createdBy','modifiedBy']
});