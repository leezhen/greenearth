Ext.define('AM.controller.Sorting', {
    extend: 'Ext.app.Controller',
    title: '录入分拣结果',
    
    views: ['sorting.Sorting'],
    
    stores: ['Sortings','Deduction'],
    
    models: ['Sortings','Deduction'],
    
    refs: [
           {ref: 'earnedGrid', selector: 'sorting earnedgrid'}
    ],
    
    requires: ['AM.store.ComboUtil'],
    
    init: function() {
        this.control({
        	'addsorting': {
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
    	var instance = Ext.ModelManager.create({
    		cellPhone: value.cellPhone,
    		inventoryTypeId: value.inventoryTypeId,
    		weight: value.weight,
    		stationId:1,
    		reasonId:value.reasonId
    	}, 'AM.model.Sortings');
    	instance.dirty = true;
    	this.getEarnedGrid().store.insert(0,instance);
    	form.reset();
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
    }
});