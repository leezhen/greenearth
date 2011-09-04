Ext.define('AM.view.pointRule.EditEarnPointRule', {
    extend: 'Ext.window.Window',
    alias : 'widget.editEarnPointRule',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    
    config: {
    	title: '积分规则',
    },
    
//    inventoryTypes: Ext.create('AM.store.ComboUtil',{
//    	urls : 'dict_inventoryTypes.do'
//    }),
    requires: ['Ext.ux.util.ComboDataUtil'],
    
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'pointRule_savePointRules.do',
                items: [
					{
                        xtype: 'hiddenfield',
                        name : 'id',
                        fieldLabel: 'ID'
                    }, {
                        fieldLabel: '积分类型',
                        name: 'pointsType.id',
                        xtype: 'combo',
                        store: new Ext.ux.util.ComboDataUtil().getPointTypes(),
                        allowBlank: false,
                        emptyText: '请选择',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id'
                    },{
                        fieldLabel: '类型',
                        name: 'inventoryType.id',
                        xtype: 'combo',
                        store: new Ext.ux.util.ComboDataUtil().getInventoryTypes(),
                        allowBlank: false,
                        emptyText: '请选择',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id'
                    },{
                        xtype: 'textfield',
                        name : 'weight',
                        fieldLabel: '重量',
                        allowBlank: false
                    },{
                        xtype: 'textfield',
                        name : 'points',
                        fieldLabel: '分数',
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
//        this.inventoryTypes.load();
    },
});