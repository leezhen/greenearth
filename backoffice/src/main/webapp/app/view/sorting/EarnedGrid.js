Ext.define('AM.view.sorting.EarnedGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedgrid',
	disabled: false,    
    border: true,
    store: 'Sortings',
    
    inventoryTypes: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_inventoryTypes.do',
    	autoLoad : true
    }),
    
    initComponent: function() {
		Ext.apply(this, {
//		    store: Ext.data.StoreManager.lookup('sortingStore'),
//			store: 'Sortings',
		    viewConfig: {
		    	forceFit: true
		    },
			
			columns: [
				{text: '顾客',  dataIndex:'customerId', flex: 1},
	            {text: '分类', dataIndex: 'inventoryTypeId', flex: 1 ,renderer: function(v){
					return Ext.widget('earnedgrid').inventoryTypes.getById(v).data.name;
				}},
				{text: '分拣站', dataIndex: 'stationId', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1}
	        ],
	        dockedItems:[{
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '提交',
					action: 'confirm',
					iconCls: 'add'
				}, '-', {
					text: '清空',
					action: 'clear',
					iconCls: 'print'
				}]
	        }]
		});

		this.callParent(arguments);
    }
});