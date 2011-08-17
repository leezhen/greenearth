Ext.define('AM.controller.Sorting', {
    extend: 'Ext.app.Controller',
    title: '录入分拣结果',
    
    views: ['sorting.Sorting','sorting.AddSorting','sorting.EarnedGrid'],
    
    stores: ['Sortings'],
    
    models: ['Sortings'],
    
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
    		customerId: value.customerId,
    		inventoryTypeId: value.inventoryTypeId,
    		weight: value.weight,
    		stationId:1
    	}, 'AM.model.Sortings');
    	instance.dirty = true;
    	this.getEarnedGrid().store.insert(0,instance);
    },
    
    submitPoint : function() {
    	this.getEarnedGrid().store.sync();
    }
});