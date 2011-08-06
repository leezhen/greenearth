Ext.define('AM.view.point.Point', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.pointView',
	
	requires: ['AM.view.point.EarnedPoint',
	           'AM.view.point.DeductionPoint',
	           'AM.view.point.TotalPoint'],

	closable: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	title: '查看积分详情',
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'earnedPoint',
				flex: 1
			},
			{
				xtype: 'deductionPoint',
				flex: 1
			},
			{
				xtype: 'totalPoint',
				flex: 1
			}]
		});

		this.callParent(arguments);
	}
});
