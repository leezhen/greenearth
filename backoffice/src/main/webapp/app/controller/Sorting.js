Ext.define('AM.controller.Sorting', {
    extend: 'Ext.app.Controller',
    title: '录入分拣结果',
    
    views: ['sorting.Sorting'],
    
    stores: ['Sortings','Deduction'],
    
    models: ['Sortings','Deduction'],
    
    refs: [
           {ref: 'earnedGrid', selector: 'sorting earnedgrid'},
           {ref: 'customerId' , selector : 'sorting textfield[name=cellPhone]'}
    ],
    
    requires: ['AM.store.ComboUtil'],
    
    init: function() {
        this.control({
        	'addsorting': {
        		addSortRecord: this.addPointRecord
            },
            'addsorting *': {
            	keydown: this.commitRecord
            },
            'deduct *': {
            	keydown: this.commitRecord
            },
            'deduct': {
        		addSortRecord: this.addPointRecord
            },
            'earnedgrid button[action=confirm]': {
            	click: this.submitPoint
            },
            'earnedgrid button[action=clear]': {
            	click: this.clearPoint
            }
        });
    },
    
    onLaunch: function() {
/*        var grid = this.getEarnedGrid(),
            store = this.getSortingsStore();
        grid.bindStore(store);*/
    },
    
    addPointRecord: function(form,value) {
    	var customerIdTxt = this.getCustomerId();
    	if(customerIdTxt == null || customerIdTxt.value == null || '' == customerIdTxt.value.trim()) {
    		Ext.Msg.alert('警告','顾客信息未填写',function(){
    			customerIdTxt.focus(true,true);
    		});
    		return;
    	}
    	var instance = Ext.ModelManager.create({
    		cellPhone: customerIdTxt.value,
    		inventoryTypeId: value.inventoryTypeId,
    		weight: value.weight,
    		stationId:1,
    		reasonId:value.reasonId
    	}, 'AM.model.Sortings');
    	instance.dirty = true;
    	this.getEarnedGrid().store.insert(0,instance);
    	form.getForm().reset();
    	form.items.items[0].focus(true,true);
    },
    
    submitPoint : function() {
    	this.getEarnedGrid().store.sync();
    	this.getEarnedGrid().store.on('write',function(store,op) {
    		if(op.success) {
    			Ext.Msg.alert('提示', '操作成功');
    			store.removeAll();
    			return ;
    		}
    	})
    	Ext.Msg.alert('提示','操作失败');
    },
    
    clearPoint : function() {
    	this.getEarnedGrid().store.removeAll();
    },
    
    commitRecord: function(text,e) {
    	if(e.getKey() == e.ENTER) {
    		var form = text.up('form');
            if (form.getForm().isValid()) {
            	form.fireEvent('addSortRecord', form, form.getValues());
            }
		}
    }
});