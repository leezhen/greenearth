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
    },
    
    editCustomer: function(grid, record) {
    	var view = Ext.widget('customeredit', {title: '编辑客户信息'});
//    	var view = Ext.create('AM.view.customer.Edit');
//    	view.setTitle('编辑客户信息');
//    	view.bindStore(store);
//    	view.getDistrictsStore().load({params: {cityId: record.get('city.id')}});
//    	cityCombo.setValue(record.get('city.id'));
    	view.down('form').loadRecord(record);
//    	console.log(record.get('city.id'));
    	var cityCombo = view.down('form combobox[id=city.id]');
    	cityCombo.fireEvent('select', cityCombo);
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
                   this.loadCustomers();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示', action.result.msg);
                },
                scope: this
            });
        }
        win.close();
     
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
    	var mainView = this.getMainView();
    	tab = mainView.down('[viewCode=point]');
    	if (!tab) {
    		tab = this.getPointTab();
    		tab.viewCode = 'point';
        	tab.enable();
        	mainView.add(tab);
    	}
    	mainView.setActiveTab(tab);
    }
});