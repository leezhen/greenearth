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
	            {text: '原因', dataIndex: 'deductionReason.name', flex: 1},
	            {text: '扣分', dataIndex: 'points', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            {text: '修改时间', dataIndex: 'modifiedAt', flex: 1},
	            {text: '创建人', dataIndex: 'createdBy', flex: 1},
	            {text: '修改人', dataIndex: 'modifiedBy', flex: 1}
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
		this.store.load();
	},
});