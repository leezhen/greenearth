Ext.define('AM.model.Merchant', {
    extend: 'Ext.data.Model',
    fields: ['id', 'city.name','merchantName', 'merchantAddr', 'score','province.name'
             ,'modifiedAt','modifiedBy','createdAt','createdBy','couponValue','province.id','city.id']
});