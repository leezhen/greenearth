Ext.define('AM.store.Cities', {
    extend: 'Ext.data.Store',
    storeId: 'citiesStore',

    model: 'AM.model.City',

    data: [
        {name: '成都',   id: 1},
        {name: '北京', 	id: 2}
    ]
});