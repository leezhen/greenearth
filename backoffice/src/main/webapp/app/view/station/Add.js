Ext.define('AM.view.station.Add', {
    extend: 'Ext.window.Window',
    alias : 'widget.stationadd',
    
    requires: ['AM.store.Cities'],
 
//    title : '编辑客户信息',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    closeAction: 'hide',
    url: 'customer_save.do',
    
    config: {
    	title: '分拣站信息',
    },
    
    citiesStore: Ext.create('Ext.data.Store', {
        fields: ['id', 'name'],
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'customer_cities.do',
            reader: {
                type: 'json'
            }
        }
    }),
 
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'customer_save.do',
                items: [
					{
                        xtype: 'hiddenfield',
                        name : 'id',
                        fieldLabel: 'ID'
                    },
					{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: '名称',
                        allowBlank: false
                    },
                    this.createCityCombo(),
                    {
                        xtype: 'textfield',
                        name : 'address',
                        fieldLabel: '地址',
                        allowBlank: false
                    }
                ]
            }
        ]});
 
        this.buttons = [
            {
                text: '保存',
                action: 'save'
            },
            {
                text: '取消',
                scope: this,
                handler: this.close
            }
        ];
 
        this.callParent(arguments);
    },
    
    createCityCombo: function() {
    	this.cities = Ext.create('Ext.form.ComboBox', {
    		id: 'city.id',
    		name : 'cityId',
            fieldLabel: '所在城市',
            emptyText: '请选择',
    		store: this.citiesStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
    	});
    	
    	return this.cities;
    }
});