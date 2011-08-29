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
    
    reasons: Ext.create('AM.store.ComboUtil',{
    	urls: 'dict_reasons.do',
    }),
    
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'pointRule_saveDeductionRules.do',
                items: [
					{
                        xtype: 'hiddenfield',
                        name : 'id',
                        fieldLabel: 'ID'
                    },
					{
                        fieldLabel: '原因',
                        name: 'deductionReason.id',
                        xtype: 'combo',
                        store: this.reasons,
                        allowBlank: false,
                        emptyText: '请选择',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id'
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
        this.reasons.load();
    },
});