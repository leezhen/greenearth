Ext.namespace("Ext.app");
Ext.app.PROVIDER_BASE_URL=window.location.protocol+"//"+window.location.host+"/"+(window.location.pathname.split("/").length>2?window.location.pathname.split("/")[1]+"/":"")+"djn/directprovider";
Ext.app.POLLING_URLS={message:Ext.app.PROVIDER_BASE_URL+"/poll/message"};
Ext.app.REMOTING_API={url:Ext.app.PROVIDER_BASE_URL,type:"remoting",actions:{Poll:[],TestAction:[{name:"doEcho",len:1,formHandler:false},{name:"multiply",len:1,formHandler:false}]}};