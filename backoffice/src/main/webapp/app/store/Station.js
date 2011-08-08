Ext.define('AM.store.Station', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Station',
    
	data: [
	  {id: 1 , name: '成都', address: 'abc'},
	  {id: 2 , name: '北京', address: 'def'}
	]
});