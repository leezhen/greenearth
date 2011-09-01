Ext.define('AM.view.stock.stockPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.stockPanel',
	
	requires: ['AM.view.stock.List',
	           'AM.view.stock.Search'],

	closable: true,
	layout: {
		type: 'anchor',
	},
	title: '库存信息',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'stocksearch',
				anchor: '50%',
				height: 80
			}, {
				xtype: 'stocklist',
				anchor: '100% -80'
			}]
		});
		this.callParent(arguments);
	}
});
