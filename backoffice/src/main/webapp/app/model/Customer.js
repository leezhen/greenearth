Ext.define('AM.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'cellphone', 'city.name', 'district.name', 'streetAddress', 'barcode','email','community','totalScore',
	         'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy']
});