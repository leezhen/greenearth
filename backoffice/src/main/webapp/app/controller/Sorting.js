Ext.define('AM.controller.Sorting', {
    extend: 'Ext.app.Controller',
    title: '录入分拣结果',
    
    views: ['sorting.Sorting','sorting.AddSorting'],
    
    stores: ['Sortings'],
    
    models: ['Sortings'],
    
    refs: [
           {ref: 'earnedGrid', selector: 'sorting earnedgrid'}
    ],
    
    requires: ['AM.store.ComboUtil'],
    
    init: function() {
        this.control({
        	'addsorting': {
        		addSortRecord: this.addSort
            }
        });
    },
    
    onLaunch: function() {
/*        var grid = this.getEarnedGrid(),
            store = this.getSortingsStore();
        grid.bindStore(store);*/
    },
    
    addSort: function(form,value) {
    	var instance = Ext.ModelManager.create({
    		customerId: value.customerId,
    		inventoryTypeId: value.inventoryTypeId,
    		weight: value.weight
    	}, 'AM.model.Sortings');
    	this.getEarnedGrid().store.insert(0,instance);
    }
});