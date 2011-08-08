Ext.define('AM.view.pointRule.List', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.pointRuleList',
	
	requires: ['AM.view.pointRule.EarnPointRule',
	           'AM.view.pointRule.DeductionPointRule'],

	closable: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	title: '查看规则详情',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'earnPointRule',
				flex: 1
			},
			{
				xtype: 'deductionPointRule',
				flex: 1
			}]
		});

		this.callParent(arguments);
	}
});
