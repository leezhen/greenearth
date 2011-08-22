Ext.define('AM.view.sorting.DeductionGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.deductiongrid',
	disabled: false,    
    border: true,
    store: 'Deduction',
    
    reasons: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_reasons.do',
    }),
    
    initComponent: function() {
		Ext.apply(this, {
//		    store: Ext.data.StoreManager.lookup('sortingStore'),
//			store: 'Sortings',
		    viewConfig: {
		    	forceFit: true
		    },
			
			columns: [
				{text: '顾客Id',  dataIndex:'customerId', flex: 1 },
	            {text: '扣分原因', dataIndex: 'inventoryTypeId', flex: 1 , renderer: function(v){
					return Ext.widget('deductiongrid').reasons.getById(v).data.name;
				}},
	            {text: '扣分数', dataIndex: 'weight', flex: 1},
	        ]
		});
		this.reasons.load();
		this.callParent(arguments);
    }
});