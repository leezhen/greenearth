// 添加分拣
Ext.define('AM.view.sorting.Deduct', {
	extend: 'Ext.form.Panel',
	alias : 'widget.deduct',

	bodyPadding: 5,
    width: 350,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    
    requires: ['AM.store.ComboUtil'],
    
    reasons: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_reasons.do',
    	autoLoad : true
    }),
    
    defaultType: 'textfield',
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '扣分原因',
            name: 'reasonId',
            xtype: 'combo',
            store: this.reasons,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        }];

        // Reset and Submit buttons
        this.buttons = [{
            text: '扣分',
            formBind: true, //only enabled once the form is valid
            handler: function() {
                var form = this.up('form');
                if (form.getForm().isValid()) {
                	form.fireEvent('addSortRecord', form, form.getValues());
                }
            }
        }];	
        
        this.addEvents('addSortRecord');
        this.callParent(arguments);
    }
});