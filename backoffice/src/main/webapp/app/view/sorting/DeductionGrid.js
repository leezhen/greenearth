Ext.define('AM.view.sorting.DeductionGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.deductiongrid',
	disabled: false,    
    border: true,
    store: 'Deduction',
    
    requires: ['Ext.ux.util.ComboDataUtil'],
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
					var reasonStore = new Ext.ux.util.ComboDataUtil().getDeductReasons();
					return reasonStore.getById(v).data.name;
				}},
	            {text: '扣分数', dataIndex: 'weight', flex: 1},
	        ]
		});
		this.reasons.load();
		this.callParent(arguments);
    }
});