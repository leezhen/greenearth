Ext.define('AM.view.pointRule.EditEarnPointRule', {
    extend: 'Ext.window.Window',
    alias : 'widget.editEarnPointRule',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    closeAction: 'hide',
    url: 'customer_save.do',
    
    config: {
    	title: '积分规则',
    },
    
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
                        name : 'type',
                        fieldLabel: '类型',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'weight',
                        fieldLabel: '重量',
                        allowBlank: false
                    },
                    {
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
    },
});