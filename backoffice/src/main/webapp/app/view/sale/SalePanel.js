Ext.define('AM.view.sale.SalePanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.salePanel',
	
	requires: ['AM.view.sale.Sale'],

	closable: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	title: '销售',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'saleOp',
				flex: 1
			}]
		});

		this.callParent(arguments);
	}
});
