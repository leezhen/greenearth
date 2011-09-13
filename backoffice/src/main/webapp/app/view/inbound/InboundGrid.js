Ext.define('AM.view.inbound.InboundGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.inboundGrid',
    border: true,
    store: 'Inbound',
    
    requires: ['Ext.ux.util.ComboDataUtil'],
    
    initComponent: function() {
		Ext.apply(this, {
		    viewConfig: {
		    	forceFit: true
		    },
			
			columns: [
	            {text: '分类', dataIndex: 'inventoryTypeId', flex: 1 ,renderer: function(v){
					var typeStore = new Ext.ux.util.ComboDataUtil().getSecondTypes();
					if(typeStore.getById(v) != null)
						return typeStore.getById(v).data.name;
				}},
				{text: '分拣站', dataIndex: 'stationId', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
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