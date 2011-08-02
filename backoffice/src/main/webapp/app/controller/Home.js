Ext.define('AM.controller.Home', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Menus', 'Customers'
    ],
 
    views: [
        'Home', 'customer.Grid', 'sorting.Sorting'
    ],
    
    models: [
        'MenuItem', 'Customer'
    ],
    
    refs: [
           {ref: 'mainView', selector: 'mainview'},
           {ref: 'menuItemData', selector: 'menu dataview'},
//           {ref: 'customerGrid', selector: 'customergrid'},
           {
               ref: 'customerTab',
               xtype: 'customergrid',
               closable: true,
               forceCreate: true,
               selector: 'customergrid'
           },
           {
               ref: 'sortingTab',
               xtype: 'sorting',
               closable: true,
               forceCreate: true,
               selector: 'sorting'
           }
    ],
 
    init: function() {
        this.control({
            'menu dataview': {
                selectionchange: this.switchView
            }
        });
    },
    
    onLaunch: function() {
        var menuview = this.getMenuItemData(),
            store = this.getMenusStore();
            
        menuview.bindStore(store);
//        menuview.getSelectionModel().select(store.getAt(0));
    },
    
    switchView: function(selModel, selected) {
        var mainView = this.getMainView(),
        	menu = selected[0];
        
        if (menu) {
	        var viewCode = menu.get('code');
	        tab = mainView.down('[viewCode=' + viewCode + ']');
	        if (!tab) {
	        	switch (viewCode) {
	        	case 'customer':
	        		tab = this.getCustomerTab();
	        		break;
	        	case 'sorting':
	        		tab = this.getSortingTab();
	        		break;
	        	default:
	        		break;
	        	}
	        	
	        	tab.viewCode = viewCode;
	        	tab.enable();
	        	mainView.add(tab);
	        }
	        
	        mainView.setActiveTab(tab);            
	        
	        return tab;
        }
        return null;
    }
});