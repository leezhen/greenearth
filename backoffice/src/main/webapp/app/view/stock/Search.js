Ext.define('AM.view.stock.Search', {
	extend: 'Ext.form.Panel',
	alias : 'widget.stocksearch',

	bodyPadding: 5,

    // Fields will be arranged vertically, stretched to full width
    layout: {
        type: 'table',
        columns: 2
    },
    
    requires: ['AM.store.ComboUtil','Ext.ux.util.ComboDataUtil'],
    
//    inventoryTypes: Ext.create('AM.store.ComboUtil',{
//    	urls: 'dict_inventoryTypes.do',
//    }),
    
    stations: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_recycleStations.do',
    }),
    
    initComponent: function() {
    	this.items = [{
            fieldLabel: '类型',
            name: 'inventoryTypeId',
            xtype: 'combo',
            store: new Ext.ux.util.ComboDataUtil().getInventoryTypes(),
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        },{
        	fieldLabel: '分拣站',
            name: 'stationId',
            xtype: 'combo',
            store: this.stations,
            emptyText: '请选择',
            queryMode: 'local',
            displayField: 'name',
            enableKeyEvents: true,
            valueField: 'id'
        }];

        // Reset and Submit buttons
        this.buttons = [{
	            text: '查询',
	            formBind: true, //only enabled once the form is valid
        	},{
            	text: '重置',
            	handler: function() {
        			var form = this.up('form');
        			form.getForm().reset();
            	}
            }];	
//        this.inventoryTypes.load();
        this.stations.load();
        this.callParent(arguments);
    }
});