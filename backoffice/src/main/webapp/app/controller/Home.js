Ext.define('AM.controller.Home', {
    extend: 'Ext.app.Controller',
//    requires: ['AM.view.LoginWindow'],
    stores: [
        'Menus', 'Customers'
    ],
 
    views: [
        'Home', 'customer.Grid', 'sorting.Sorting','stock.stockPanel','station.List', 'LoginWindow', 'customer.DirectTest',
        'sale.SalePanel'
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
        	   xtype: 'stockPanel',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'stockPanel'
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
        	   xtype: 'salePanel',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'salePanel'
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
           },{
        	   ref: 'partnerTab',
        	   xtype: 'partnerList',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'partnerList'
           },{
        	   // Just for Direct test
        	   ref: 'directTestTab',
        	   xtype: 'directtest',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'directtest'
           }
    ],
 
    init: function() {
        this.control({
            'menu dataview': {
                itemclick: this.onSwitchView
            },
            'loginwindow button[action=login]': {
                click: this.onLogin
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
    	
    	// 检查用户是否已登录
    	Ext.Ajax.request({
    		url: 'auth_isAuthenticated.do',
    		scope: this,
    		success: function(response) {
    			var json = Ext.decode(response.responseText);
    			if (!json.loggedIn) {
    				Ext.widget('loginwindow');
    			} else {
    				this.loadMenus();
    			}
    		}
    	});
    },
    
    onSwitchView: function(view, record, item, index) {
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
    },
    
    loadMenus: function() {
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
    
    onLogin: function(button) {
        var win    = button.up('window'),
            form   = win.down('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                	console.log(action.result);
                	win.close();
                	this.loadMenus();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', '登录失败');
                },
                scope: this
            });
        }
    }
});