Ext.define('AM.store.PointRule', {
    extend: 'Ext.data.Store',
    model: 'AM.model.PointRule',
    
	data: [
	  {id: 1 , type: '可回收', weight: 10, points:1},
	  {id: 2 , type: '玻璃', weight: 10, points:2}
	]
});