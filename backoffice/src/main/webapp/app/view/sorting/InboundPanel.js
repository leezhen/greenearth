// 分拣
Ext.define('AM.view.sorting.InboundPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inboundPanel',
	
	requires: ['AM.view.sorting.AddSorting',
	           'AM.view.sorting.Deduct'],

	closable: true,
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	title: '录入分拣结果',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'addsorting',
				flex: 1
			}, {
				xtype: 'deduct',
				flex: 1
			}]
		});

		this.callParent(arguments);
	}
});
