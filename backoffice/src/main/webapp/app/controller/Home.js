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
           {ref: 'menuPanel', selector: 'menu'},
           {ref: 'mainView', selector: 'mainview'},
//           {ref: 'menuItemData', selector: 'menu dataview'},
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
    
    /*
     * 加载菜单
     */
    onLaunch: function() {
//        var menuview = this.getMenuItemData(),
//            store = this.getMenusStore();
//        menuview.bindStore(store);
//        menuview.getSelectionModel().select(store.getAt(0));

    	var menuPanel = this.getMenuPanel();
    	menuPanel.removeAll();
		Ext.Ajax.request({
//		    url: 'data/menus.json',
			url: 'menu_list.do',
		    success: function(response){
		        var rootMenus = Ext.decode(response.responseText);
		        Ext.each(rootMenus, function(rootMenu) {
		        	var menus = Ext.create('Ext.DataView', {
		                store: Ext.create('Ext.data.Store', {
		                	model: 'AM.model.MenuItem',
		                	data :[rootMenu.subMenus]
		                }),
		                tpl: new Ext.XTemplate(
		            		'<tpl for=".">',
		        		        '<div class="menu-list-item">',
		        		          '<a href="#">',
		        		          	'<img src="{icon}" />',
		        		          	'<br/><span>{caption}</span>',
		        		          '</a>',
		        		        '</div>',
		        		    '</tpl>'
		        		),
		                itemSelector: 'div.menu-list-item',
		        		cls: 'menu-list',
		    			overItemCls: 'feed-list-item-hover',
		                emptyText: 'No images available',
		                autoScroll: true
		            });
		        	var g = Ext.create('Ext.panel.Panel', {
		                bodyPadding: 5,  // Don't want content to crunch against the borders
		                title: rootMenu.caption,
		                layout: 'fit',
		                split: true,
		                collapsible: true,
		                animCollapse: true,
		                iconCls: 'nav',
		                items: [menus]
		            });
		        	menuPanel.add(g);
		        });
		    }
		});
    },
    
    switchView: function(view, record, item, index) {
    	var mainView = this.getMainView();
    	var viewRef = record.get('viewRef');
    	tab = mainView.down('[viewRef=' + viewRef + ']');
        if (!tab) {
    		tab = eval('this.get' + Ext.String.capitalize(viewRef) + '()');
        	tab.viewRef = viewRef;
        	tab.enable();
        	mainView.add(tab);
        }
        mainView.setActiveTab(tab);     
        
        return tab;
    }
});