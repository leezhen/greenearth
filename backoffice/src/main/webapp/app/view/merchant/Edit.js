Ext.define('AM.view.merchant.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.merchantEdit',
    
    requires: ['Ext.ux.util.ComboDataUtil','Ext.ux.util.ComboUtil'],
 
    layout: 'fit',
    width: 400,
    height: 300,
    
    config: {
    	title: '商户信息',
    },
    
    cityStores: Ext.create('Ext.ux.util.ComboUtil',{
    	urls: 'customer_cities.do',
    }),
    
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'merchant_save.do',
                bodyPadding: 5,
                items: [
					{
                        xtype: 'hiddenfield',
                        name : 'id',
                        fieldLabel: 'ID'
                    },
					{
                        xtype: 'textfield',
                        name : 'merchantName',
                        fieldLabel: '商户名称',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'merchantAddr',
                        fieldLabel: '商户地址'
                    },
                    {
                        xtype: 'textfield',
                        name : 'score',
                        fieldLabel: '所需积分',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'couponValue',
                        fieldLabel: '兑换券值',
                        allowBlank: false
                    },
                    this.createProvinceCombo(),
                    this.createCityCombo()
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
    		name : 'city.id',
            fieldLabel: '市',
            emptyText: '请选择',
    		store: this.cityStores,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false
    	});
    	return this.cities;
    },
    
    createProvinceCombo : function() {
    	this.provinces = Ext.create('Ext.form.ComboBox', {
    		id: 'province.id',
    		name : 'province.id',
            fieldLabel: '省',
            emptyText: '请选择',
    		store: new Ext.ux.util.ComboDataUtil().getProvinces(),
    		allowBlank: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            listeners:{
            	scope: this,
                'select': this.showCities
            }
    	});
    	
    	return this.provinces;
    },
    
    showCities: function(combo) {
    	this.loadCities(combo.getValue());
    },
    
    loadCities: function(value) {
    	this.cityStores.removeAll();
		this.cityStores.load({params: {provinceId: value}});
    }
    
    
});