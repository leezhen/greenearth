Ext.define('AM.view.point.EarnedPoint', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.earnedPoint',

//	cls: 'feed-grid',
    border: false,
    title: '积分记录',
    
    requires: ['Ext.toolbar.Toolbar'],
    
    initComponent: function() {
		Ext.apply(this, {
		    store: 'Point',
		    viewConfig: {
		    	forceFit: true
		    },
			/*viewConfig: {
				plugins: [{
					pluginId: 'preview',
					ptype: 'preview',
					bodyField: 'description',
					previewExpanded: true
				}]
			},*/

			columns: [
			    {text: 'id' ,dataIndex: 'id' ,flex :1 },
	            {text: '积分额', dataIndex: 'points', flex: 1}
	            ],
		    
		    dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'Point',   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }]
		});

		this.callParent(arguments);
//		this.store.load();
	}
});