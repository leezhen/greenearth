Ext.define('AM.view.point.DeductionPoint', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.deductionPoint',

//	cls: 'feed-grid',
    border: false,
    title: '扣分记录',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'DeductedPoints',
		    viewConfig: {
		    	forceFit: true
		    },

			columns: [
			    {text: 'id' ,dataIndex: 'id' ,flex :1 },
	            {text: '积分额', dataIndex: 'points', flex: 1},
	            {text: '顾客', dataIndex: 'customer.name', flex: 1},
	            {text: '原因', dataIndex: 'reason.name', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1}
	            ],
		    
		    dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'DeductedPoints',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});

		this.callParent(arguments);
	}
});