// 添加分拣
Ext.define('AM.view.sorting.AddSorting', {
	extend: 'Ext.form.Panel',
	alias : 'widget.addsorting',

	bodyPadding: 5,
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    
    inventoryTypes: Ext.create('Ext.data.Store', {
        fields: ['id', 'name'],
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'dict_inventoryTypes.do',
            reader: {
                type: 'json'
            }
        }
    }),
    
    defaultType: 'textfield',
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '客户ID',
            name: 'customerId',
            allowBlank: false
        }, {
            fieldLabel: '垃圾分类',
            name: 'inventoryTypeId',
            xtype: 'combo',
            store: this.inventoryTypes,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        }, {
            fieldLabel: '重量',
            name: 'weight',
            allowBlank: false
        }];

        // Reset and Submit buttons
        this.buttons = [{
            text: '添加',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                }
            }
        }];	
        
        this.callParent(arguments);
    }
});