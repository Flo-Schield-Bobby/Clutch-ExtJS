/**
 * @class NITB.model.MD_Notification
 * @extend Ext.data.Model
 * Data Model which contains all the informations related
 * to a single incoming Notification.
 */
Ext.define('Clutch.model.Torrent', {
    extend : 'Ext.data.Model',
    fields : [{
        name : 'activityDate',
        type : 'number'
    }, {
        name : 'addedDate',
        type : 'date'
    }, {
        name : 'bandwidthPriority',
        type : 'number'
    }, {
        name : 'comment',
        type : 'string'
    }, {
        name : 'corruptEver'
    }, {
        name : 'creator',
        type : 'string'
    }, {
        name : 'dateCreated',
        type : 'date'
    }, {
        name : 'desiredAvailable'
    }, {
        name : 'doneDate',
        type : 'date'
    }, {
        name : 'downloadDir',
        type : 'string'
    }, {
        name : 'downloadedEver',
        type : 'number'
    }, {
        name : 'downloadLimit'
    }, {
        name : 'downloadLimited'
    }, {
        name : 'error'
    }, {
        name : 'errorString'
    }, {
        name : 'eta',
        type : 'number'
    }, {
        name : 'etaIdle'
    }, {
        name : 'files'
    }, {
        name : 'fileStats'
    }, {
        name : 'hashString',
        type : 'string'
    }, {
        name : 'haveUnchecked'
    }, {
        name : 'haveValid'
    }, {
        name : 'honorsSessionLimits'
    }, {
        name : 'id',
        type : 'number'
    }, {
        name : 'isFinished',
        type : 'bool'
    }, {
        name : 'isPrivate',
        type : 'bool'
    }, {
        name : 'isStalled',
        type : 'bool'
    }, {
        name : 'leftUntilDone'
    }, {
        name : 'magnetLink',
        type : 'string'
    }, {
        name : 'manualAnnounceTime'
    }, {
        name : 'maxConnectedPeers',
        type : 'number'
    }, {
        name : 'metadataPercentComplete',
        type : 'number'
    }, {
        name : 'name',
        type : 'string'
    }, {
        name : 'peer-limit',
        type : 'number'
    }, {
        name : 'peers'
    }, {
        name : 'peersConnected',
        type : 'number'
    }, {
        name : 'peersFrom'
    }, {
        name : 'peersGettingFromUs'
    }, {
        name : 'peersSendingToUs'
    }, {
        name : 'percentDone'
    }, {
        name : 'pieces'
    }, {
        name : 'pieceCount'
    }, {
        name : 'pieceSize'
    }, {
        name : 'priorities'
    }, {
        name : 'queuePosition'
    }, {
        name : 'rateDownload',
        type : 'number'
    }, {
        name : 'rateUpload'
    }, {
        name : 'recheckProgress'
    }, {
        name : 'secondsDownloading'
    }, {
        name : 'secondsSeeding'
    }, {
        name : 'seedIdleLimit'
    }, {
        name : 'seedIdleMode'
    }, {
        name : 'seedRatioLimit'
    }, {
        name : 'seedRatioMode'
    }, {
        name : 'sizeWhenDone'
    }, {
        name : 'startDate'
    }, {
        name : 'status',
        type : 'number'
    }, {
        name : 'trackers'
    }, {
        name : 'trackerStats'
    }, {
        name : 'totalSize',
        type : 'number'
    }, {
        name : 'torrentFile'
    }, {
        name : 'uploadedEver'
    }, {
        name : 'uploadLimit'
    }, {
        name : 'uploadLimited'
    }, {
        name : 'uploadRatio'
    }, {
        name : 'wanted'
    }, {
        name : 'webseeds'
    }, {
        name : 'webseedsSendingToUs'
    }]
});
