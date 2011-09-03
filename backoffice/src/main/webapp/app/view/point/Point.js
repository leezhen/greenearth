Ext.define('AM.view.point.Point', {
	extend: 'Ext.window.Window',
	alias: 'widget.pointView',
	
	requires: ['AM.view.point.EarnedPoint',
	           'AM.view.point.DeductionPoint',
	           'AM.view.point.TotalPoint'],

	closable: true,
	layout: {
		type: 'anchor',
	},
	title: '查看积分详情',
	height:600,
	width:1000,
	
	refs: [
           {
        	   ref: 'earnedPoint',
        	   selector: 'earnedPoint'
           }
    ],
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'earnedPoint',
				flex: 1,
				anchor: '100% 50%'
			},
			{
				xtype: 'deductionPoint',
				flex: 1,
				anchor: '100% 50%'
			}/*,
			{
				xtype: 'totalPoint',
				flex: 1,
				anchor: '40% 20%'
			}*/]
		});

		this.callParent(arguments);
	}
});
