Ext.define('AM.controller.Station', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Station'
    ],
 
    views: [
        'station.List','station.Add'
    ],
    
    models: [
        'Station'
    ],
    
    init: function() {
        this.control({
            'stationlist button[action=add]': {
                click: this.addStation
            },
            'stationadd button[action=save]': {
                click: this.saveStation
            }
        });
    },
    
    /*onLaunch: function() {
        var editor = this.getCustomerEdit(),
            store = this.getCitiesStore();
        editor.bindStore(store);
//        menuview.getSelectionModel().select(store.getAt(0));
    },*/
 
    addStation: function(grid) {
    	var view = Ext.widget('stationadd');
    	view.setTitle('录入分拣站');
    },
    
    saveStation: function(button) {
    }
});