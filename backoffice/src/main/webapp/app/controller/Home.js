Ext.define('AM.controller.Home', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Menus', 'Customers'
    ],
 
    views: [
        'Home', 'customer.Grid', 'sorting.Sorting','stock.List','station.List'
    ],
    
    models: [
        'MenuItem', 'Customer'
    ],
    
    refs: [
           {ref: 'mainView', selector: 'mainview'},
           {ref: 'menuItemData', selector: 'menu dataview'},
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
           },
           {
        	   ref: 'stockTab',
        	   xtype: 'stocklist',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'stocklist'
           },
           {
        	   ref: 'stationTab',
        	   xtype: 'stationlist',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'stationlist'
           },
           {
        	   ref: 'pointRuleTab',
        	   xtype: 'pointRuleList',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'pointRuleList'
           },
           {
        	   ref: 'saleTab',
        	   xtype: 'saleOp',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'saleOp'
           }, {
        	   ref: 'saleRecordTab',
        	   xtype: 'saleRecord',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'saleRecord'
           },{
        	   ref: 'inventoryLogTab',
        	   xtype: 'inventoryLog',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'inventoryLog'
           }
    ],
 
    init: function() {
        this.control({
            'menu dataview': {
                itemclick: this.switchView
            }
        });
    },
    
    onLaunch: function() {
        var menuview = this.getMenuItemData(),
            store = this.getMenusStore();
            
        menuview.bindStore(store);
//        menuview.getSelectionModel().select(store.getAt(0));
    },
    
    switchView: function(view, record, item, index) {
    	var mainView = this.getMainView();
        var viewCode = record.get('code');
        tab = mainView.down('[viewCode=' + viewCode + ']');
        if (!tab) {
        	switch (viewCode) {
        	case 'customer':
        		tab = this.getCustomerTab();
        		break;
        	case 'sorting':
        		tab = this.getSortingTab();
        		break;
        	case 'stock':
        		tab = this.getStockTab();
        		break;
        	case 'station':
        		tab = this.getStationTab();
        		break;
        	case 'pointRule':
        		tab = this.getPointRuleTab();
        		break; 
        	case 'sales':
        		tab = this.getSaleTab();
        		break;
        	case 'salesRecord':
        		tab = this.getSaleRecordTab();
        		break;
        	case 'inventoryLog':
        		tab = this.getInventoryLogTab();
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
});