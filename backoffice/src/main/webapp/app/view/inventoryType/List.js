Ext.define('AM.view.inventoryType.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.inventoryTypeList',

//	cls: 'feed-grid',
    border: false,
    title: '库存分类列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'InventoryType',
		    viewConfig: {
		    	forceFit: true
		    },
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '库存名称', dataIndex: 'name', flex: 1},
				{text: '描述', dataIndex: 'desc', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'InventoryType',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }, {
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '添加',
					action: 'add',
					iconCls: 'add'
				}]
			}]
		});
		this.callParent(arguments);
		this.store.load();
	}
});