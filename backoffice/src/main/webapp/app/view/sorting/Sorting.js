// 分拣
Ext.define('AM.view.sorting.Sorting', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sorting',
	
	requires: ['AM.view.sorting.AddSorting',
	           'AM.view.sorting.EarnedGrid',
	           'AM.view.sorting.DeductionGrid',
	           'AM.view.sorting.InboundPanel'],

	closable: true,
	layout: {
		type: 'anchor',
	},
	title: '录入分拣结果',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'addsorting',
				anchor: '40% 30%'
			}, {
				xtype: 'earnedgrid',
				anchor: '100% 70%'
			}]
		});

		this.callParent(arguments);
	}
});
