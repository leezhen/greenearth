Ext.define('AM.view.inbound.Inbound', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inbound',
	title: '分拣入库',
	
	requires: ['AM.view.inbound.InboundForm',
	           'AM.view.inbound.InboundGrid'],
	layout: {
		type: 'anchor',
	},
	border: false,
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'textfield',
				fieldLabel: '客户ID',
	            name: 'barCode',
	            allowBlank: false,
			}, {
				xtype: 'inboundForm',
				anchor: '30%',
				height: 120
			}, {
				xtype: 'inboundGrid',
				anchor: '100% -120'
			}]
		});
		this.callParent(arguments);
	}
});
