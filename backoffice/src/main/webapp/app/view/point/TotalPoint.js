Ext.define('AM.view.point.TotalPoint', {
	extend: 'Ext.form.Panel',
	alias: 'widget.totalPoint',

    border: false,
    title: '积分统计',
    layout: 'anchor',
    
    initComponent: function() {
		this.items = [{
			xtype: 'textfield',
			name: 'totalEarnedPoints',
	    	fieldLabel: '积分总额',
	    	readOnly:true
	    }, {
	    	xtype: 'textfield',
	    	name: 'totalDeductedPoints',
	        fieldLabel: '扣分总额',
	        readOnly:true
	    }, {
	    	xtype: 'textfield',
	    	name: 'totalAvaliablePoints',
	    	fieldLabel: '可用积分',
	    	readOnly:true
	    }];

		this.callParent(arguments);
	}
});