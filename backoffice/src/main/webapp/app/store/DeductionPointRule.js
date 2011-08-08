Ext.define('AM.store.DeductionPointRule', {
    extend: 'Ext.data.Store',
    model: 'AM.model.DeductionPointRule',
    
	data: [
	  {id: 1 , reason: '乱来', points:1},
	  {id: 2 , reason: '有炸弹', points:20}
	]
});