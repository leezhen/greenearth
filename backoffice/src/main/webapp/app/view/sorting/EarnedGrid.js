Ext.define('AM.view.sorting.EarnedGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedgrid',
	disabled: false,    
    border: true,
    store: 'Sortings',
    
    inventoryTypes: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_inventoryTypes.do'
    }),
    
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
				{text: '顾客',  dataIndex:'cellPhone', flex: 1},
	            {text: '分类', dataIndex: 'inventoryTypeId', flex: 1 ,renderer: function(v){
					if(Ext.widget('earnedgrid').inventoryTypes.getById(v) != null)
						return Ext.widget('earnedgrid').inventoryTypes.getById(v).data.name;
				}},
				{text: '分拣站', dataIndex: 'stationId', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '扣分原因', dataIndex: 'reasonId', flex: 1 ,renderer: function(v){
	            	if(Ext.widget('earnedgrid').reasons.getById(v) != null)
	            		return Ext.widget('earnedgrid').reasons.getById(v).data.name;
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
		this.inventoryTypes.load();
		this.reasons.load();
		this.callParent(arguments);
    }
});