// 添加分拣
Ext.define('AM.view.sale.Sale', {
	extend: 'Ext.form.Panel',
	alias : 'widget.saleOp',
	
	bodyPadding: 5,
    width: 300,
    height: 250,

    // The form will submit an AJAX request to this URL when submitted
    url: 'sellRecord_save.do',
    
    requires: ['AM.store.ComboUtil','Ext.ux.util.ComboDataUtil'],

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    
    stations: Ext.create('AM.store.ComboUtil',{
    	urls : 'dict_recycleStations.do'
    }),
    
    partners: Ext.create('AM.store.ComboUtil',{
    	urls : 'dict_partners.do'
    }),
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '类型',
            name: 'inventoryTypeId',
            xtype: 'combo',
            store: new Ext.ux.util.ComboDataUtil().getInventoryTypes(),
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        },{
            fieldLabel: '出库数量',
            name: 'weight',
            allowBlank: false,
            minValue: 0,
            xtype: 'numberfield',
            enableKeyEvents: true,
            keyNavEnabled: false,
            hideTrigger: true,
            mouseWheelEnabled: false,
            maxLength: 9
        }, {
            fieldLabel: '分拣站',
            name: 'recycleStationId',
            xtype: 'combo',
            store: this.stations,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        },{
            fieldLabel: '合作商',
            name: 'partnerId',
            xtype: 'combo',
            store: this.partners,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        },{
        	xtype: 'numberfield',
            fieldLabel: '单价',
            name: 'price',
            minValue: 0,
            allowBlank: false,
            enableKeyEvents: true,
            keyNavEnabled: false,
            hideTrigger: true,
            maxLength: 9,
            mouseWheelEnabled: false
        },{
        	xtype: 'numberfield',
            fieldLabel: '总价',
            name: 'totalAmount',
            allowBlank: false,
            minValue: 0,
            hideTrigger: true,
            keyNavEnabled: false,
            enableKeyEvents: true,
            maxLength: 12,
            mouseWheelEnabled: false
        }];

        // Reset and Submit buttons
        this.buttons = [{
            text: '出库',
            formBind: true, //only enabled once the form is valid
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.msg);
                           form.reset();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                }
            }
        }];	
        
        this.callParent(arguments);
//        this.inventoryTypes.load();
        this.partners.load();
        this.stations.load();
        this.getForm().url = 'sellRecord_save.do';
        this.items.items[0].focus(true,true);
    }
});