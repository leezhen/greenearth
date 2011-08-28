Ext.define('AM.view.customer.DirectTest', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.directtest',
	id: 'logger',
	title: 'Remote Call Log',
	width: 600,
	height: 300,
    tpl: '<p>{data}</p>',
    tplWriteMode: 'append',
    autoScroll: true,
    bodyStyle: 'padding: 5px;',
    
    dockedItems: [{
        dock: 'bottom',
        xtype: 'toolbar',
        items: [{
            hideLabel: true,
            itemId: 'echoText',
            xtype: 'textfield',
            width: 300,
            emptyText: 'Echo input'
        }, {
            itemId: 'echo',
            text: 'Echo',
            action: 'echo'
        }, '-', {
            hideLabel: true,
            itemId: 'multiplyText',
            xtype: 'textfield',
            width: 80,
            emptyText: 'Multiply x 8'
        }, {
            itemId: 'multiply',
            text: 'Multiply',
            action: 'multiply'
        }]
    }]
});