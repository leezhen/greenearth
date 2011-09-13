Ext.define('AM.view.inbound.InboundForm', {
	extend: 'Ext.form.Panel',
	alias : 'widget.inboundForm',
	
	bodyPadding: 5,
    width: 350,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    
    requires: ['Ext.ux.util.ComboDataUtil'],
    
    defaultType: 'textfield',
    
//    inventoryTypes: new AM.view.util.ComboDataUtil().comboInventoryTypes(),
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '垃圾分类',
            name: 'inventoryTypeId',
            xtype: 'combo',
            store: new Ext.ux.util.ComboDataUtil().getSecondTypes(),
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        }, {
            fieldLabel: '重量',
            name: 'weight',
            allowBlank: false,
            enableKeyEvents: true,
        }
        ];

        // Reset and Submit buttons
        this.buttons = [{
            text: '添加',
            action: 'add',
            formBind: true, //only enabled once the form is valid
        }];	
        
        this.callParent(arguments);
    }
});