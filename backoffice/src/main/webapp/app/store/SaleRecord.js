Ext.define('AM.store.SaleRecord', {
    extend: 'Ext.data.Store',
    model: 'AM.model.SaleRecord',
    
	data: [
	  {id: 1 , station: 'XX回收站', weight: 10,total:123},
	  {id: 2 , station: '北京回收站', weight: 10,total:412}
	]
});