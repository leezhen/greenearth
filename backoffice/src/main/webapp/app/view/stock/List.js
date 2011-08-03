Ext.define('AM.view.stock.Grid', {
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
				{text: '类型',  dataIndex:'name', flex: 1},
	            {text: '库存数量', dataIndex: 'quantity', flex: 1}
	            ]
		});

		this.callParent(arguments);
	}
});