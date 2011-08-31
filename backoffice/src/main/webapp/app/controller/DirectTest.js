Ext.define('AM.controller.DirectTest', {
    extend: 'Ext.app.Controller',
 
    views: [
        'customer.DirectTest'
    ],

    refs: [
           {ref: 'directTest', selector: 'directtest'},
    ],
    
    init: function() {
        this.control({
            'viewport > mainview directtest button[action=echo]': {
                click: this.doEcho
            },
            'viewport > mainview directtest button[action=multiply]': {
                click: this.doMultiply
            }
        });
    },
    
    onLaunch: function() {
        Ext.direct.Manager.addProvider(Ext.app.REMOTING_API/*, {
            type:'polling',
            url: Ext.app.POLLING_URLS.message,
            listeners: {
            	scope: this,
                data: function(provider, event){
                    this.updateMain('<i>' + event.data + '</i>');
                }
            }
        }*/);    	
    },
    
    doEcho: function(button){
    	var panel = button.up('panel');
    	var field = panel.down('textfield[itemId=echoText]');
        TestAction.doEcho(field.getValue(), function(result, event){
            var transaction = event.getTransaction(),
                content = Ext.String.format('<b>Successful call to {0}.{1} with response:</b><pre>{2}</pre>',
                    transaction.action, transaction.method, Ext.encode(result));
            this.updateMain(content);
            field.reset();
        }, this);
    },
    
    doMultiply: function(button){
    	var panel = button.up('panel');
    	var field = panel.down('textfield[itemId=multiplyText]');
        TestAction.multiply(field.getValue(), function(result, event){
            var transaction = event.getTransaction(),
                content;
                
            if (event.status) {
                content = Ext.String.format('<b>Successful call to {0}.{1} with response:</b><pre>{2}</pre>',
                    transaction.action, transaction.method, Ext.encode(result));
            } else {
                content = Ext.String.format('<b>Call to {0}.{1} failed with message:</b><pre>{2}</pre>',
                    transaction.action, transaction.method, event.message);
            }
            this.updateMain(content);
            field.reset();
        }, this);
    },
    
    updateMain: function(content){
        this.getDirectTest().update({
            data: content
        });
        this.getDirectTest().body.scroll('b', 100000, true);
    }    
});