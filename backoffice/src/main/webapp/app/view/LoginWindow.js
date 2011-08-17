Ext.define('AM.view.LoginWindow', {
    extend: 'Ext.window.Window',
    alias : 'widget.loginwindow',
    
    title : '登录系统',
    layout: 'fit',
    autoShow: true,
    width: 350,
    height: 150,
    modal: true,
    closable: false,
//    url: 'auth_login.do',
 
    initComponent: function() {
    	this.items = [
            {
                xtype: 'form',
                url: 'auth_login.do',
                defaultType: 'textfield',
                bodyPadding: 5,
                items: [
					{
                        name : 'username',
                        fieldLabel: '姓名',
                        allowBlank: false
                    },
					{
                        name : 'password',
                        fieldLabel: '密码',
                        allowBlank: false,
                        inputType: 'password'
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: '登录',
                action: 'login'
            }
        ];
        this.callParent(arguments);
    }
});