// 分拣
Ext.define('AM.view.sorting.Sorting', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sorting',
	
	requires: ['AM.view.sorting.AddSorting',
	           'AM.view.sorting.EarnedGrid',
	           'AM.view.sorting.DeductionGrid'],

	closable: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	title: '录入分拣结果',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'addsorting',
				flex: 1
			}, {
				xtype: 'earnedgrid',
				flex: 1
			}, {
				xtype: 'deductiongrid',
				flex: 1
			}]
		});

		this.callParent(arguments);
	}
});
