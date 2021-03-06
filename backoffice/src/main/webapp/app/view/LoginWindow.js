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
                        fieldLabel: '用户名',
                        enableKeyEvents: true,
                        allowBlank: false
                    },
					{
                        name : 'password',
                        fieldLabel: '密码',
                        allowBlank: false,
                        enableKeyEvents: true,
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