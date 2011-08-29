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
    
    reasons: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_reasons.do',
    	autoLoad : true
    }),
    
    defaultType: 'textfield',
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '垃圾分类',
            name: 'inventoryTypeId',
            xtype: 'combo',
            store: this.inventoryTypes,
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
            text: '积分',
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