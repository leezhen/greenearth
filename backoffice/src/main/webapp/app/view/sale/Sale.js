// 添加分拣
Ext.define('AM.view.sale.Sale', {
	extend: 'Ext.form.Panel',
	alias : 'widget.saleOp',
	
	bodyPadding: 5,
    width: 350,
    
    title: '销售',

    // The form will submit an AJAX request to this URL when submitted
    url: 'sellRecord_save.do',
    
    requires: ['AM.store.ComboUtil'],

    // Fields will be arranged vertically, stretched to full width
//    layout: 'anchor',
    
    defaultType: 'textfield',
    
    inventoryTypes: Ext.create('AM.store.ComboUtil',{
    	urls : 'dict_inventoryTypes.do'
    }),
    
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
            store: this.inventoryTypes,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        },{
            fieldLabel: '出库数量',
            name: 'weight',
            allowBlank: false
        }, {
            fieldLabel: '分拣站',
            name: 'recycleStationId',
            xtype: 'combo',
            store: this.stations,
            allowBlank: false,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
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
            valueField: 'id'
        },{
            fieldLabel: '单价',
            name: 'price',
            allowBlank: false
        },{
            fieldLabel: '总价',
            name: 'totalAmount',
            allowBlank: false
        }];

        // Reset and Submit buttons
        this.buttons = [{
            text: '出库',
            formBind: true, //only enabled once the form is valid
            handler: function() {
                var form = this.up('form').getForm();
                	form.url = 'sellRecord_save.do';
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
        this.inventoryTypes.load();
        this.partners.load();
        this.stations.load();
    }
});