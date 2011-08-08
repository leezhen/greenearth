Ext.define('AM.view.pointRule.EditDeductPointRule', {
    extend: 'Ext.window.Window',
    alias : 'widget.editDeductPointRule',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 300,
    closeAction: 'hide',
    url: 'customer_save.do',
    
    config: {
    	title: '扣分规则',
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
                        name : 'reason',
                        fieldLabel: '原因',
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