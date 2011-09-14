Ext.define('AM.controller.Customers', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Customers', 'Menus'
    ],
 
    views: [
        'user.List',
        'user.Edit',
        'customer.Grid',
        'customer.Edit',
        'point.Point'
    ],
    
    models: [
        'User', 'MenuItem', 'Customer'
    ],
    
    requires: ['AM.store.TotalPoint'],
    
    refs: [
           {ref: 'menuItemData', selector: 'menu dataview'},
           {ref: 'customerGrid', selector: 'customergrid'},
           {ref: 'mainView', selector: 'mainview'},
           {
        	   ref: 'pointTab',
        	   xtype: 'pointView',
        	   closable: true,
        	   forceCreate: true,
        	   selector: 'pointView'
           }
//           {ref: 'customerEdit', selector: 'customeredit'}
    ],
    
    init: function() {
        this.control({
        	'viewport > mainview customergrid': {
                itemdblclick: this.editCustomer
            },
            'viewport > mainview customergrid button[action=add]': {
                click: this.addCustomer
            },
            'customeredit button[action=save]': {
                click: this.saveCustomer
            },
            'menu button[action=add]': {
                click: this.addFeed
            },
            'menu button[action=remove]': {
                click: this.removeFeed
            },
            'customergrid':{
            	viewPoints: this.viewPoints
            }
        });
    },
    
    /*onLaunch: function() {
        var editor = this.getCustomerEdit(),
            store = this.getCitiesStore();
        editor.bindStore(store);
//        menuview.getSelectionModel().select(store.getAt(0));
    },*/
 
    addCustomer: function(grid) {
    	var view = Ext.widget('customeredit');
    	view.setTitle('录入客户信息');
    	view.show();
    },
    
    editCustomer: function(grid, record) {
    	var view = Ext.widget('customeredit', {title: '编辑客户信息'});
    	view.districtsStore.removeAll();
    	view.districtsStore.load({
    		params: {cityId: record.data["city.id"]},
    		callback: function(r,response,success) {
        		if(success) {
        			view.down('form').loadRecord(record);
        			view.show();
        		}
        	}
    	});
    },
    
    saveCustomer: function(button) {
        var win    = button.up('window'),
            form   = win.down('form').getForm();
//            record = form.getRecord(),
//            values = form.getValues();
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                   Ext.Msg.alert('提示', action.result.msg);
                   win.close();
                   this.loadCustomers();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', action.result.msg);
                },
                scope: this
            });
        }
        /*if (record) {
        	// 修改
        	record.set(values);
        } else {
        	// 新增
            store = this.getCustomersStore(),
//            console.log(form.down('textfield[name=name]').getValue());
            record = this.getCustomerModel().create({
                name: form.down('textfield[name=name]').getValue(),
                cellphone: form.down('textfield[name=cellphone]').getValue(),
                streetAddress: form.down('textfield[name=streetAddress]').getValue(),
                barcode: form.down('textfield[name=barcode]').getValue()
            });
            this.getCustomersStore().add(record);
        }
        win.close();
        this.getCustomersStore().sync();*/
    },
    
    loadCustomers: function(selModel, selected) {
		var store = this.getCustomersStore();
		store.load();
    },
    
    viewPoints: function(grid,rec){
    	var pointView = Ext.widget('pointView');
    	pointView.show();
    	var items = pointView.items;
    	items.items[0].store.proxy.extraParams = {customerId: rec.data.id};
    	items.items[1].store.proxy.extraParams = {customerId: rec.data.id};
    	items.items[0].store.load();
    	items.items[1].store.load();/*
    	var totalStore = new AM.store.TotalPoint();
    	totalStore.load({
    		params:{customerId: rec.data.id},
    		callback: function(r,response,success) {
    		if(success) {
    			if(r[0] != null) {
    				items.items[2].show();
    				items.items[2].getForm().loadRecord(r[0]);
    			}
    		}
    	}});*/
    }
});