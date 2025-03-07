const collectionTableConfigs = {
	"tabView":[
        {
            datakey:"artist",
            label:"Artist",
            format:"string"
        },
        {
            datakey:"type",
            label:"Type",
            format:"string"
        },
        {
            datakey:"songCount",
            label:"Song Count",
            format:"string"
        },
        {
            datakey:null,
            label:"Total Size",
            format:"string",
            performOpertion:{key:"songs",value:"sizeInBytes",format:"bytes"}
        },
        {
            datakey:null,
            label:"Total Duration",
            format:"string",
            performOpertion:{key:"songs",value:"durationInSeconds",format:"seconds"}
        },
        {
            datakey:"releasedOn",
            label:"Released On",
            format:"date-time"
        }
    ],
    "tableView":[{
      datakey: "title",
      label: "Song",
      format: "string",
      validation_disabled: false,
      sort_by: true,
      child:"artist",
      filter:false,
      link:false
    },
    {
      datakey: "performers",
      label: "Performers",
      format: "array",
      validation_disabled: true,
      sort_by: true,
      link:false,
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
    }
  ]};
export default collectionTableConfigs;