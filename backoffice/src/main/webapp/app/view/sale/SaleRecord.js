Ext.define('AM.view.sale.SaleRecord', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.saleRecord',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '销售记录',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'SaleRecord',
		    viewConfig: {
		    	forceFit: true
		    },
			/*viewConfig: {
				plugins: [{
					pluginId: 'preview',
					ptype: 'preview',
					bodyField: 'description',
					previewExpanded: true
				}]
			},*/
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '分拣站', dataIndex: 'station.name', flex: 1},
	            {text: '合作商', dataIndex: 'partner.name', flex: 1},
	            {text: '单价', dataIndex: 'price', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '总价', dataIndex: 'totalAmount', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'SaleRecord',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});
		this.callParent(arguments);
		this.store.load();
	},
});