Ext.define('AM.model.Activity', {
    extend: 'Ext.data.Model',
    fields: ['id', 'city.name','name', 'desc', 'score','province.name'
             ,'modifiedAt','modifiedBy','createdAt','createdBy']
});