Ext.define('AM.controller.Customers', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Customers', 'Menus', 'Cities'
    ],
 
    views: [
        'user.List',
        'user.Edit',
        'customer.Grid',
        'customer.Edit'
    ],
    
    models: [
        'User', 'MenuItem', 'Customer', 'City'
    ],
    
    refs: [
           {ref: 'menuItemData', selector: 'menu dataview'},
           {ref: 'customerGrid', selector: 'customergrid'}
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
                click: this.updateCustomer
            },
            'menu button[action=add]': {
                click: this.addFeed
            },
            'menu button[action=remove]': {
                click: this.removeFeed
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
    	var view = Ext.widget('customeredit').show();
    	view.setTitle('录入客户信息');
    },
    
    editCustomer: function(grid, record) {
//    	var view = Ext.widget('customeredit');
//    	var store = this.getCitiesStore();
    	var view = Ext.create('AM.view.customer.Edit');
//    	var view = new AM.view.customer.Edit(store);
    	view.setTitle('编辑客户信息');
//    	view.bindStore(store);
//    	view.getDistrictsStore().load({params: {cityId: record.get('city.id')}});
//    	cityCombo.setValue(record.get('city.id'));
    	view.down('form').loadRecord(record);
    	var cityCombo = view.down('form combobox[name=city.id]');
    	cityCombo.fireEvent('select', cityCombo);
        view.show();
    },
    
    updateCustomer: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
     
        if (record) {
        	// 修改
        	record.set(values);
        } else {
        	// 新增
            store = this.getCustomersStore(),
//            console.log(form.down('textfield[name=name]').getValue());
            record = this.getCustomerModel().create({
                name: form.down('textfield[name=name]').getValue(),
                cellphone: form.down('textfield[name=cellphone]').getValue(),
//                city.id: form.down('textfield[name=name]').getValue(),
//                district.id: form.down('textfield[name=name]').getValue(),
                streetAddress: form.down('textfield[name=streetAddress]').getValue(),
                barcode: form.down('textfield[name=barcode]').getValue()
            });
            this.getCustomersStore().add(record);
        }
        win.close();
//        console.log(record);
        this.getCustomersStore().sync();
    },
    
    loadCustomer: function(selModel, selected) {
        var grid = this.getCustomerGrid(),
            store = this.getCustomersStore(),
            menu = selected[0];
        if (menu) {
            grid.enable();
            store.load(/*{
                params: {
                	start: 0,
                	limit: this.itemsPerPage
                }
            }*/);            
        }
    }
});