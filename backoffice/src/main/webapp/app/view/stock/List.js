Ext.define('AM.view.stock.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.stocklist',

//	cls: 'feed-grid',
	disabled: true,    
    border: false,
    title: '库存信息',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Stock',
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
			    {text: 'id' ,dataIndex: 'id' ,flex :1 },
				{text: '类型',  dataIndex:'type.name', flex: 1},
	            {text: '库存数量', dataIndex: 'weight', flex: 1},
	            {text: '分拣站', dataIndex: 'station.name', flex: 1},
	            ],
		    
		    dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Stock',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});

		this.callParent(arguments);
		this.store.load();
	}
});