Ext.define('AM.view.partner.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.partnerList',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '供应商列表',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Partner',
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
	            {text: '城市', dataIndex: 'city.name', flex: 1},
	            {text: '供应商', dataIndex: 'name', flex: 1},
	            {text: '电话', dataIndex: 'telephone', flex: 1},
	            {text: '传真', dataIndex: 'fax', flex: 1},
	            {text: '地址', dataIndex: 'address', flex: 1},
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Partner',   // same store GridPanel is using
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