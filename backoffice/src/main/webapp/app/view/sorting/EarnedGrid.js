Ext.define('AM.view.sorting.EarnedGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedgrid',
	disabled: false,    
    border: true,
    store: 'Sortings',
    
    initComponent: function() {
		Ext.apply(this, {
//		    store: Ext.data.StoreManager.lookup('sortingStore'),
//			store: 'Sortings',
		    viewConfig: {
		    	forceFit: true
		    },
			
			columns: [
				{text: '',  dataIndex:'no', flex: 1},
	            {text: '分类', dataIndex: 'inventoryType', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	        ]
		});

		this.callParent(arguments);
    }
});