Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    views : ['search.SearchResultGrid'],

    init : function(app) {
        var me = this;

        me.control({
            'searchcontextmenu' : {
                click : me.onContextMenuClick
            },
            'searchresultgrid' : {
                beforeitemcontextmenu : me.onContextMenu,
                afterrender : me.onAfterRender,
                itemdblclick : me.onSearchResultDoubleClick
            }
        });
        app.on({

            statsreceived : me.onStatsReceived,
            dosearch : me.doSearch

        });
    },

    doSearch : function(searchTerm) {
        Ext.ComponentQuery.query('searchresultgrid')[0].setSearchTerm(searchTerm);

    },

    onAfterRender : function(gridPanel) {
        gridPanel.contextMenu.gridPanel = gridPanel;
    },
    onStatsReceived : function(data) {
        //alert('from the other contorller');
    },
    onSearchResultDoubleClick : function(grid, record, item, index, e, eOpts) {
        var url = record.get('enclosure_url');
        this.downloadTorrent(url);
    },
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        var contextMenu = view.up('searchresultgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },

    onContextMenuClick : function(menu, item, e, eOpts) {

        var grid = menu.gridPanel;

        if (!item) {
            return;
        }

        switch (item.action) {
            case 'download':
                this.downloadSelectedTorrents(grid);
                break;
            case 'remove':
                this.removeSelectedTorrents(grid);
                break;
        }
    },

    downloadSelectedTorrents : function(grid) {
        var selected = grid.getSelectionModel().getSelection();
        Ext.each(selected, function(record) {
            var url = record.get('enclosure_url');
            this.downloadTorrent(url);
        });
    },
    downloadTorrent : function(url) {
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {
            url : url
        }).show();
    }
});
