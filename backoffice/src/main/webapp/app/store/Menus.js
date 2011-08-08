Ext.define('AM.store.Menus', {
    extend: 'Ext.data.Store',

    model: 'AM.model.MenuItem',

    data: [
        {name: '客户信息查询',   	code: 'customer'},
        {name: '录入分拣结果', 	code: 'sorting'},
        {name: '查看库存',       	code: 'stock'},
        {name: '查看分拣站',     code: 'station'},
        {name: '销售',       	code: 'sales'},
        {name: '查看销售记录',    code: 'salesRecord'},
        {name: '积分规则设定',    code: 'pointRule'}
    ]
});