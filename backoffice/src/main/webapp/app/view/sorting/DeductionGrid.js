Ext.define('AM.view.sorting.DeductionGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.deductiongrid',
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
	            {text: '扣分原因', dataIndex: 'inventoryType', flex: 1},
	            {text: '扣分数', dataIndex: 'weight', flex: 1},
	        ]
		});

		this.callParent(arguments);
    }
});