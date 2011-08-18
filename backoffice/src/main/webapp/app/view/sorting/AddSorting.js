// 添加分拣
Ext.define('AM.view.sorting.AddSorting', {
	extend: 'Ext.form.Panel',
	alias : 'widget.addsorting',

	bodyPadding: 5,
    width: 350,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    
    requires: ['AM.store.ComboUtil'],
    
    inventoryTypes: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_inventoryTypes.do',
    	autoLoad : true
    }),
    
    defaultType: 'textfield',
    enableKeyEvents: true,
    
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
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                	Ext.widget('addsorting').fireEvent('addSortRecord', form, form.getValues());
                }
            }
        }];	
        
        this.addEvents('addSortRecord');
        this.callParent(arguments);
    }
});