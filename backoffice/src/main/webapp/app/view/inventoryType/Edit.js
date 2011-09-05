Ext.define('AM.view.inventoryType.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.editInventoryType',
 
//    title : '编辑客户信息',
    layout: 'fit',
    width: 400,
    height: 300,
    
    config: {
    	title: '库存分类信息',
    },
 
    initComponent: function() {
    	Ext.apply(this, {
    		items: [
            {
                xtype: 'form',
                url: 'inventoryType_save.do',
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
                    {
                        xtype: 'textfield',
                        name : 'desc',
                        fieldLabel: '描述'
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
    }
});