Ext.define('AM.controller.Inbound', {
    extend: 'Ext.app.Controller',
    title: '分类入库',
    views: ['inbound.Inbound'],
    
    stores: ['Inbound'],
    
    models: ['Inbound'],
    
    refs: [
           {ref: 'inboundGrid', selector: 'inbound inboundGrid'},
           {ref: 'customerId' , selector : 'inbound textfield[name=barCode]'}
    ],
    
    
    init: function() {
        this.control({
        	'inboundForm button': {
        		click: this.inboundAdd
            },
            'inboundForm *': {
            	keydown: this.inboundKeyDown
            },
            'inboundGrid button[action=confirm]': {
            	click: this.submitInbound
            },
            'inboundGrid button[action=clear]': {
            	click: this.clearInbound
            }
        });
    },
    
    inboundAdd: function(com) {
    	var customerIdTxt = this.getCustomerId();
    	if(customerIdTxt == null || customerIdTxt.value == null || '' == customerIdTxt.value.trim()) {
    		Ext.Msg.alert('警告','顾客信息未填写',function(){
    			customerIdTxt.focus(true,true);
    		});
    		return;
    	}
    	
    	var form = com.up('form');
    	if (form.getForm().isValid()) {
    		var values = form.getValues();
    	
	    	var instance = Ext.ModelManager.create({
	    		barCode: customerIdTxt.value,
	    		inventoryTypeId: values.inventoryTypeId,
	    		weight: values.weight,
	    		stationId:1,
	    	}, 'AM.model.Inbound');
	    	instance.dirty = true;
	    	this.getInboundGrid().store.insert(0,instance);
	    	form.getForm().reset();
	    	form.items.items[0].focus(true,true);
    	}
    },
    
    submitInbound : function() {
    	this.getInboundGrid().store.sync();
    	this.getInboundGrid().store.on('write',function(store,op) {
    		if(op.success) {
    			Ext.Msg.alert('提示', '操作成功');
    			store.removeAll();
    			return ;
    		}
    	})
    	Ext.Msg.alert('提示','操作失败');
    },
    
    clearInbound : function() {
    	this.getInboundGrid().store.removeAll();
    },
    
    inboundKeyDown: function(com,e) {
    	if(e.getKey() == e.ENTER) {
    		this.inboundAdd(com);
		}
    }
});