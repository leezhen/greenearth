// 分拣
Ext.define('AM.view.sorting.ActionPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sortActionPanel',
	
	requires: ['AM.view.sorting.AddSorting',
	           'AM.view.sorting.Deduct'],
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	border: false,
	
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
