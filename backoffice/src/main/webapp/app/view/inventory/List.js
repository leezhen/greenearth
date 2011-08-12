Ext.define('AM.view.inventory.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.inventoryLog',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '入库记录',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'InventoryLog',
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
	            {text: '顾客', dataIndex: 'customer.name', flex: 1},
	            {text: '库存类型', dataIndex: 'type.name', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'InventoryLog',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});
		this.callParent(arguments);
		this.store.load();
	},
});