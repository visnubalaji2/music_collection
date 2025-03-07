const tableConfigs = {
    "showSearch": true,
    "showFilter": false,
    "showDateFilter": false,
    "dateFilterDefault": '',
    "showAddNewRow": true,
    "showDownload": false,
    "showRefreshTable": false,
    "showUploadFile": false,
    "showShowMore": true,
    "showEditAction": true,
    "showDeleteAction": true,	
    "tableView":[{
      datakey: "name",
      label: "Collection Name",
      format: "string",
      validation_disabled: false,
      sort_by: true,
      child:"artist",
      filter:false,
      link:false
    },
    {
      datakey: "type",
      label: "Type",
      format: "string",
      validation_disabled: true,
      sort_by: true,
      link:false,
      filter:true,
      filterValues:['EP','Album','Single']
    },
    {
      datakey: "songCount",
      label: "Song Count",
      format: "string",
      validation_disabled: true,
      sort_by: true,
      filter:false,
      link:false
    },
    {
      datakey: "durationInSeconds",
      label: "Duration",
      format: "seconds",
      validation_disabled: true,
      sort_by: true,
      filter:false,
      link:false
    },
    {
      datakey: "sizeInBytes",
      label: "Size",
      format: "bytes",
      validation_disabled: true,
      sort_by: true,
      filter:false,
      link:false
    },
    {
      datakey: "releasedOn",
      label: "Released On",
      format: "date-time",
      validation_disabled: true,
      sort_by: true,
      filter:false,
      link:false
    },
    {
        datakey: "id",
        label: "",
        format: "icon",
        validation_disabled: true,
        sort_by: true,
        filter:false,
        link:true
    }
  ]};
export default tableConfigs;