Ext.define('AM.view.sorting.EarnedGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedgrid',
	disabled: false,    
    border: true,
    store: 'Sortings',
    
    requires: ['Ext.ux.util.ComboDataUtil'],
    
//    inventoryTypes: new Ext.ux.util.ComboDataUtil().getInventoryTypes(),
    
//    reasons: Ext.create('AM.store.ComboUtil',{
//    	urls: 'dict_reasons.do',
//    	autoLoad: true
//    }),
    
    initComponent: function() {
		Ext.apply(this, {
//		    store: Ext.data.StoreManager.lookup('sortingStore'),
//			store: 'Sortings',
		    viewConfig: {
		    	forceFit: true
		    },
			
			columns: [
				{text: '顾客',  dataIndex:'barCode', flex: 1},
	            {text: '分类', dataIndex: 'inventoryTypeId', flex: 1 ,renderer: function(v){
					var typeStore = new Ext.ux.util.ComboDataUtil().getInventoryTypes();
					if(typeStore.getById(v) != null)
						return typeStore.getById(v).data.name;
				}},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '扣分原因', dataIndex: 'reasonId', flex: 1 ,renderer: function(v){
	            	var reasons = new Ext.ux.util.ComboDataUtil().getDeductReasons();
	            	if(reasons.getById(v) != null)
	            		return reasons.getById(v).data.name;
				}},
	            {
	                xtype: 'actioncolumn',
	                items: [{
	                    icon: 'images/cross.gif',
	                    tooltip: '删除',
	                    handler: function(grid, rowIndex, colIndex) {
	                       	grid.getStore().removeAt(rowIndex);
	                    }
	                }]
	            }
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