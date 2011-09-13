// 分拣
Ext.define('AM.view.sorting.Sorting', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sorting',
	
	requires: ['AM.view.sorting.EarnedGrid',
	           'AM.view.sorting.ActionPanel'],

	closable: true,
	layout: {
		type: 'anchor',
	},
	title: '录入分拣结果',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'textfield',
				fieldLabel: '客户ID',
	            name: 'barCode',
	            allowBlank: false,
			},{
				xtype: 'sortActionPanel',
				anchor: '60%',
				height: 100
			}, {
				xtype: 'earnedgrid',
				anchor: '100% -120'
			}]
		});
		this.callParent(arguments);
		this.items.items[0].focus(true,true);
	}
});
