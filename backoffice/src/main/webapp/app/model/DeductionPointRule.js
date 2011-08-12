Ext.define('AM.model.DeductionPointRule', {
    extend: 'Ext.data.Model',
    fields: ['id', 'deductionReason.name','createdAt','modifiedAt','createdBy','modifiedBy', 'points']
});