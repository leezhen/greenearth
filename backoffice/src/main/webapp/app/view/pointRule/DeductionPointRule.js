Ext.define('AM.view.pointRule.DeductionPointRule', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.deductionPointRule',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '扣分规则列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'DeductionPointRule',
		    viewConfig: {
		    	forceFit: true
		    },
			/*viewConfig: {
				plugins: [{
					pluginId: 'preview',
					ptype: 'preview',
					bodyField: 'description',
					previewExpanded: true
				}]
			},*/
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '原因', dataIndex: 'reason', flex: 1},
	            {text: '扣分', dataIndex: 'points', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'DeductionPointRule',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }, {
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '添加',
					action: 'add',
					iconCls: 'add'
				}]
			}]
		});
		this.callParent(arguments);
	},
});