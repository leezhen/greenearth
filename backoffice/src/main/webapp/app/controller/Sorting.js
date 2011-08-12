Ext.define('AM.controller.Sorting', {
    extend: 'Ext.app.Controller',
    title: '录入分拣结果',
    
    views: ['sorting.Sorting'],
    
    stores: ['Sortings'],
    
    refs: [
           {ref: 'earnedGrid', selector: 'sorting earnedgrid'}
    ],
    
    requires: ['AM.store.ComboUtil'],
    
    init: function() {
        this.control(/*{
        	'viewport > mainview customergrid': {
                itemdblclick: this.editCustomer
            }
        }*/);
    },
    
    onLaunch: function() {
/*        var grid = this.getEarnedGrid(),
            store = this.getSortingsStore();
        grid.bindStore(store);*/
    }
});