Ext.define('AM.view.point.EarnedPoint', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedPoint',

//	cls: 'feed-grid',
    border: false,
    title: '积分记录',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'EarnedPoints',
		    viewConfig: {
		    	forceFit: true
		    },

			columns: [
			    {text: 'id' ,dataIndex: 'id' ,flex :1 },
	            {text: '积分额', dataIndex: 'points', flex: 1},
	            {text: '顾客', dataIndex: 'customer.name', flex: 1},
	            {text: '库存类型', dataIndex: 'inventoryType.name', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1}
	            ],
		    
		    dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'EarnedPoints',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});

		this.callParent(arguments);
	}
});