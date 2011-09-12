Ext.define('AM.view.activity.ActivityGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.activityGrid',

    border: false,
    title: '供应商列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Activity',
		    viewConfig: {
		    	forceFit: true
		    },
			columns: [
				{text: '编号',  dataIndex:'id', flex: 1},
	            {text: '城市', dataIndex: 'city.name', flex: 1},
	            {text: '省', dataIndex: 'province.name', flex: 1},
	            {text: '活动名称', dataIndex: 'name', flex: 1},
	            {text: '所需积分', dataIndex: 'score', flex: 1},
	            {text: '描述', dataIndex: 'desc', flex: 1},
	            {text: '修改时间', dataIndex: 'modifiedAt', flex: 1},
	            {text: '修改人', dataIndex: 'modifiedBy', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            {text: '创建人', dataIndex: 'createdBy', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Activity',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            	}, {
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '新增',
					action: 'add',
					iconCls: 'add'
				}, '-', {
					text: '扣分',
					action: 'cut',
					iconCls: 'print'
				}]
			}]
		});
		this.callParent(arguments);
		this.store.load();
	},
});