Ext.define('AM.view.merchant.MerchantGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.merchantGrid',

    border: false,
    title: '合作商列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Merchant',
		    viewConfig: {
		    	forceFit: true
		    },
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '城市', dataIndex: 'city.name', flex: 1},
	            {text: '省', dataIndex: 'province.name', flex: 1},
	            {text: '商户名称', dataIndex: 'merchantName', flex: 1},
	            {text: '所需积分', dataIndex: 'score', flex: 1},
	            {text: '优惠券值', dataIndex: 'couponValue', flex: 1},
	            {text: '地址', dataIndex: 'merchantAddr', flex: 1},
	            {text: '修改时间', dataIndex: 'modifiedAt', flex: 1},
	            {text: '修改人', dataIndex: 'modifiedBy', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            {text: '创建人', dataIndex: 'createdBy', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Merchant',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            	}, {
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '新增',
					action: 'add',
					iconCls: 'add'
				}]
			}]
		});
		this.callParent(arguments);
		this.store.load();
	},
});