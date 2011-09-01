Ext.define('AM.view.station.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.stationlist',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '分拣站列表',
    
    requires: ['Ext.toolbar.Toolbar',
               'Ext.ux.grid.FilterRow',
               'Ext.ux.util.ComboDataUtil'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Station',
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
	            {text: '所在城市', dataIndex: 'address', flex: 1, xfilter:{
					xtype:'combo',
					store:new Ext.ux.util.ComboDataUtil().getCities(),
				    dataIndex:'stationId',
				    displayField: 'name',
				    valueField: 'id'
				}},
	            {text: '分拣站名称', dataIndex: 'name', flex: 1}
	            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Station',   // same store GridPanel is using
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
			}],
		    plugins: [ Ext.create('Ext.ux.grid.FilterRow') ]
		});
		this.callParent(arguments);
		this.store.load();
	},
});