Ext.define('AM.view.activity.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.activityEdit',
    
    requires: ['Ext.ux.util.ComboDataUtil'],
 
    layout: 'fit',
    width: 400,
    height: 300,
    
    config: {
    	title: '活动信息',
    },
    
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'activity_save.do',
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
                        fieldLabel: '活动名称',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'desc',
                        fieldLabel: '活动描述'
                    },
                    {
                        xtype: 'textfield',
                        name : 'score',
                        fieldLabel: '所需积分',
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
    		store: new Ext.ux.util.ComboDataUtil().getCities(),
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
            valueField: 'id'
    	});
    	
    	return this.provinces;
    }
});