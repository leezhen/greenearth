Ext.define('AM.view.customer.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.customeredit',
    
    requires: ['AM.store.Cities','Ext.ux.util.ComboDataUtil'],
 
//    title : '编辑客户信息',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    
    config: {
    	title: '客户信息',
    	districtsStore: []
    },
    
//    citiesStore:Ext.create('Ext.data.Store', {
//        fields: ['id', 'name'],
//        autoLoad: false,
//        proxy: {
//            type: 'ajax',
//            url: 'customer_cities.do',
//            reader: {
//                type: 'json'
//            }
//        }
//    }),
    
    districtsStore: Ext.create('Ext.data.Store', {
        fields: ['id', 'name'],
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: 'customer_districts.do',
            reader: {
                type: 'json'
            }
        }
    }),
    
    /*constructor: function(config) {
        this.initConfig(config);
 
        return this;
    },*/
    /*constructor: function(store) {
        if (store)
        	this.store = store;
 
        return this;
    },*/
 
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'customer_save.do',
                bodyPadding: 5,
                items: [
					{
                        xtype: 'hiddenfield',
                        name : 'id',
                        fieldLabel: 'ID'
                    },
					{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: '姓名',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'cellphone',
                        fieldLabel: '手机号码',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: '邮箱',
                        allowBlank: false
                    },
                    this.createProvinceCombo(),
                    this.createCityCombo(),
                    this.createDistrictCombo(),
                    {
                        xtype: 'textfield',
                        name : 'community',
                        fieldLabel: '社区',
                        allowBlank: false
                    },{
                        xtype: 'textfield',
                        name : 'streetAddress',
                        fieldLabel: '地址',
                        allowBlank: false
                    }
//                    {
//                        xtype: 'textfield',
//                        name : 'barcode',
//                        fieldLabel: '条码',
//                        allowBlank: false
//                    }
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
//        this.citiesStore.load();
        this.callParent(arguments);
    },
    
    createCityCombo: function() {
    	this.cities = Ext.create('Ext.form.ComboBox', {
    		id: 'city.id',
    		name : 'cityId',
            fieldLabel: '市',
            emptyText: '请选择',
    		store: new Ext.ux.util.ComboDataUtil().getCities(),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            listeners:{
            	scope: this,
                'select': this.showDistrict
            }
    	});
    	return this.cities;
    },
    
    createDistrictCombo: function() {
    	this.districts = Ext.create('Ext.form.ComboBox', {
    		id: 'district.id',
    		name : 'districtId',
            fieldLabel: '区',
            emptyText: '请选择',
    		store: this.districtsStore,
    		allowBlank: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
    	});
    	
    	return this.districts;
    },
    
    createProvinceCombo : function() {
    	this.provinces = Ext.create('Ext.form.ComboBox', {
    		id: 'province.id',
    		name : 'provinceId',
            fieldLabel: '省',
            emptyText: '请选择',
    		store: new Ext.ux.util.ComboDataUtil().getProvinces(),
    		allowBlank: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
    	});
    	
    	return this.provinces;
    },
    
    showDistrict: function(combo) {
//    	console.log(combo);
//    	console.log(combo.getValue() + '-' + combo.getRawValue());
//    	console.log('new Value: ' + newValue + ', oldValue: ' + oldValue);
//    	if (oldValue) {
    		this.districtsStore.removeAll();
    		this.districtsStore.load({params: {cityId: combo.getValue()}});
//    	}
    }
});