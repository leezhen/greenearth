Ext.define('AM.view.inventory.SortWindow', {
	extend: 'Ext.window.Window',
	alias: 'widget.sortWindow',
	
	requires: ['AM.view.sorting.AddSorting',
	           'AM.view.sorting.EarnedGrid',
	           'AM.view.sorting.DeductionGrid'],
	           
//	layout: 'fit',
	width: 600,
    height: 400,
    
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
