Ext.define('AM.view.inventory.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.inventoryLog',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '入库记录',
    
    requires: ['Ext.toolbar.Toolbar','Ext.ux.grid.FilterRow'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'InventoryLog',
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
	            {text: '分拣站', dataIndex: 'station.name', flex: 1, xfilter:{
					xtype:'combo',
					store:new Ext.ux.util.ComboDataUtil().getStations(),
				    dataIndex:'stationId',
				    displayField: 'name',
				    valueField: 'id'
				}},
//	            {text: '顾客', dataIndex: 'customer.name', flex: 1},
	            {text: '库存类型', dataIndex: 'type.name', flex: 1, xfilter:{
					xtype:'combo',
					store:new Ext.ux.util.ComboDataUtil().getInventoryTypes(),
				    dataIndex:'inventoryTypeId',
				    displayField: 'name',
				    valueField: 'id'
				}},
	            {text: '重量', dataIndex: 'weight', flex: 1},
	            {text: '创建时间', dataIndex: 'createdAt', flex: 1},
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'InventoryLog',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            	}, {
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: '录入',
					action: 'add',
					iconCls: 'add'
				}, '-', {
					text: '扣分',
					action: 'cut',
					iconCls: 'print'
				}]
			}],
			plugins: [ Ext.create('Ext.ux.grid.FilterRow') ]
		});
		this.callParent(arguments);
		this.store.load();
	},
});