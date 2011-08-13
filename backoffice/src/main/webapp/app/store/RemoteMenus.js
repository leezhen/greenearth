Ext.define('AM.store.RemoteMenus', {
    extend: 'Ext.data.Store',
    storeId: 'remoteMenusStore',
    requires: ['AM.model.MenuItem'],
    model: 'AM.model.MenuItem',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'data/menus.json',
        reader: {
            type: 'json',
            root: 'menus',
            successProperty: 'success'
        }
    }
});