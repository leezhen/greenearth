Ext.define('AM.view.Menu', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.menu',
	title: '',
	margins: '0 0 5 5',
	split: true,
    collapsible: true,
    animCollapse: true,
    layout: 'accordion',

	initComponent: function() {
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					text: '退出登录',
					action: 'add'
				}, {
					text: '修改密码',
					disabled: true,
					action: 'remove'
				}]
			}]
		});

		this.callParent(arguments);
	}
});
