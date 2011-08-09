Ext.define('AM.store.Menus', {
	id : 'menuStore',
	extend: 'Ext.data.Store',
	
	model: 'AM.model.MenuItem',

	data : [ {
		icon : './images/kiva.png',
		caption : '客户信息查询',
		code: 'customer'
	}, {
		icon : './images/kiva.png',
		caption : '录入分拣结果',
		code: 'sorting'
	}, {
		icon : './images/kiva.png',
		caption : '查看库存',
		code: 'stock'
	}, {
		icon : './images/kiva.png',
		caption : '查看分拣站',
		code: 'station'
	}, {
		icon : './images/kiva.png',
		caption : '销售',
		code: 'sales'
	}, {
		icon : './images/kiva.png',
		caption : '查看销售记录',
		code: 'salesRecord'
	}, {
		icon : './images/kiva.png',
		caption : '积分规则设定',
		code: 'pointRule'
	} ]
});