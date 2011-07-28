Ext.define('AM.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'cellphone', 'city.id', 'district.id', 'streetAddress', 'barcode',
	         'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy']
});