Ext.define('AM.view.pointRule.EarnPointRule', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnPointRule',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '积分规则列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'PointRule',
		    viewConfig: {
		    	forceFit: true
		    },
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '积分类型', dataIndex: 'pointsType.name', flex: 1},
	            {text: '垃圾类型', dataIndex: 'inventoryType.name', flex: 1},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '积分', dataIndex: 'points', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            {text: '修改时间', dataIndex: 'modifiedAt', flex: 1},
	            {text: '创建人', dataIndex: 'createdBy', flex: 1},
	            {text: '修改人', dataIndex: 'modifiedBy', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'PointRule',   // same store GridPanel is using
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