Ext.define('AM.view.customer.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.customergrid',

//	cls: 'feed-grid',
	disabled: false,    
    border: false,
    title: '客户信息',
    
    requires: ['Ext.toolbar.Toolbar',
               'Ext.ux.grid.FilterRow'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Customers',
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
				{text: '姓名',  dataIndex:'name', flex: 1},
	            {text: '手机号码', dataIndex: 'cellphone', flex: 1},
	            {text: '地址', dataIndex: 'streetAddress', flex: 2, nofilter: {}},
	            {text: '当前积分', dataIndex: 'scores', flex: 0.5, nofilter: {}},
	            /*{text: '积分详情', flex: 1,
	            	renderer: function(value, metaData, record) {
	                    return Ext.String.format('<a href="#">查看详情</a>');
	                }
	            }*/
	            {
	                xtype: 'actioncolumn',
	                items: [{
	                    icon: 'images/details.gif',
	                    tooltip: '查看积分详情',
	                    handler: function(grid, rowIndex, colIndex) {
	                        var rec = grid.getStore().getAt(rowIndex);
	                        var result = Ext.widget('customergrid').fireEvent('viewPoints', this, rec);
	                    }
	                }],
	                nofilter: {}
	            }],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Customers',   // same store GridPanel is using
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
					text: '打印条码',
					action: 'printBarcode',
					iconCls: 'print'
				}]
			}],
			plugins: [ Ext.create('Ext.ux.grid.FilterRow') ]
//			plugins: [{ptype: 'gridfilterrow'}]
		});
		this.addEvents('viewPoints');
		this.callParent(arguments);
	}
});