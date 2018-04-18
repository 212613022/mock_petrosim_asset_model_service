'use strict';

// dummy hardcoded json to be sent on get requests
exports.s95Json = {
    "s95":{
                "classifications": [{
                                
      "id": "KbcTest1ForSandBoxEnvironment-Asset-Refinery-Type",
      "name": "KbcTest1ForSandBoxEnvironment Enterprise Type",
      "description": "Enterprise Type Descirption",
      "ccomClass": "ENTERPRISE_TYPE",
      "properties": [
        {
          "id": "KbcTest1ForSandBoxEnvironment Enterprise Asset Type Property",
          "value": [
            "KbcTest1ForSandBoxEnvironment Enterprise Asset Type property value"
          ],
                                  
          "type": "string"
        }
      ],
      "parent": null
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-Asset-Site-Type",
      "name": "KbcTest1ForSandBoxEnvironment Asset Site Type",
      "description": "Site Type Description",
      "ccomClass": "SITE_TYPE",
      "properties": [
        {
          "id": "KbcTest1ForSandBoxEnvironment Site Asset Type property",
          "value": [
            "KbcTest1ForSandBoxEnvironment Site Asset Type property value"
          ],
          "type": "string"
        }
      ],
      "parent": null
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-Asset-Segment-Type",
      "name": "KbcTest1ForSandBoxEnvironment-Asset-Segment-Type",
      "description": "Segment Type Description",
      "ccomClass": "ASSET_TYPE",
      "parent": null
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-Process-Type",
      "name": "KbcTest1ForSandBoxEnvironment Asset Type",
      "description": "Asset Type Description",
      "ccomClass": "ASSET_TYPE",
      "parent": null
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-Asset1-Type",
      "name": "KbcTest1ForSandBoxEnvironment Asset Type",
      "description": "Asset Type Description",
      "ccomClass": "ASSET_TYPE",
      "parent": null
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-Asset2-Type",
      "name": "KbcTest1ForSandBoxEnvironment Asset Type",
      "description": "Asset Type Description",
      "ccomClass": "ASSET_TYPE",
      "parent": null
    }
  ],
  "instances": [
    {
      "id": "KbcTest1ForSandBoxEnvironment-Asset-Enterprise",
      "name": "KbcTest1ForSandBoxEnvironment Enterprise",
     "description": "KbcTest1ForSandBoxEnvironment Asset entierprise description",
      "properties": [
        {
          "id": "Location",
          "value": [
            "Bay Area"
          ],
          "type": "string"
        }
      ],
      "classification": "KbcTest1ForSandBoxEnvironment-Asset-Refinery-Type",
      "ccomClass": "ENTERPRISE"
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-CA-Site",
      "name": "KbcTest1ForSandBoxEnvironment Site",
      "description": "KbcTest1ForSandBoxEnvironment Site description",
      "properties": [
        {
          "id": "KbcTest1ForSandBoxEnvironment_CA_address",
          "value": [
            "Bay Area"
          ],
          "type": "string"
        }
      ],
      "classification": "KbcTest1ForSandBoxEnvironment-Asset-Site-Type",
      "ccomClass": "SITE"
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-CA-Segment-ID",
      "name": "Samp Segment",
      "description": "KbcTest1ForSandBoxEnvironment Segment description",
      "properties": [
        {
          "id": "KbcTest1ForSandBoxEnvironment_model_number",
          "value": [
            "KbcTest1ForSandBoxEnvironment Segment description"
          ],
          "type": "string"
        }
      ],
      "classification": "KbcTest1ForSandBoxEnvironment-Asset-Segment-Type",
      "ccomClass": "ASSET"
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID",
      "name": "KbcTest1ForSandBoxEnvironment Asset",
      "description": "KbcTest1ForSandBoxEnvironment Description",
      "classification": "KbcTest1ForSandBoxEnvironment-Asset1-Type",
      "ccomClass": "ASSET"
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template",
      "name": "KbcTest1ForSandBoxEnvironment Asset",
      "description": "KbcTest1ForSandBoxEnvironment Description",
      "classification": "KbcTest1ForSandBoxEnvironment-Asset1-Type",
      "ccomClass": "ASSET"
    },
    {
      "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template_Embeded",
      "name": "KbcTest1ForSandBoxEnvironment Asset",
      "description": "KbcTest1ForSandBoxEnvironment Description",
      "classification": "KbcTest1ForSandBoxEnvironment-Asset1-Type",
      "ccomClass": "ASSET"
    }
  ],
  "connections": [
    {
      "from": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Site",
        "ccomClass": "SITE"
      },
      "to": [
        {
          "type": "parent",
          "id": "KbcTest1ForSandBoxEnvironment-Asset-Enterprise",
          "ccomClass": "ENTERPRISE"
        }
      ]
    },
    {
      "from": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Segment-ID",
        "ccomClass": "ASSET"
      },
      "to": [
        {
          "type": "parent",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Site",
          "ccomClass": "SITE"
        }
      ]
    },
    {
      "from": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID",
        "ccomClass": "ASSET"
      },
      "to": [
        {
          "type": "parent",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Segment-ID",
          "ccomClass": "ASSET"
        }
      ]
    },
    {
      "from": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template",
        "ccomClass": "ASSET"
      },
      "to": [
        {
          "type": "parent",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID",
          "ccomClass": "ASSET"
        }
      ]
    },
    {
      "from": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template_Embeded",
        "ccomClass": "ASSET"
      },
      "to": [
        {
          "type": "parent",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID",
          "ccomClass": "ASSET"
        }
      ]
    }
  ],
  "tagClassifications": [
    {
      "id": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
      "name": "KbcTest1ForSandBoxEnvironment_Tag_Pressure_Classification_name",
      "description": "This is tag Pressure Classification description",
      "unitGroup": "pressure",
     "properties": [
        {
          "id": "compressor",
          "value": [
            190
          ],
          "type": "int"
        }
      ]
    }
  ],
  "tagAssociations": [
    {
      "monitoredEntity": {
        "id": "KbcTest1ForSandBoxEnvironment-Asset-Enterprise",
        "ccomClass": "ENTERPRISE"
      },
      "tags": [
        {
          "name": "KbcTest1ForSandBoxEnvironment Enterprise Tag",
          "id": "KbcTest1ForSandBoxEnvironment-Asset-Enterprise.KbcTest1ForSandBoxEnvironment_Tag_Pressure",
          "description": "Enterprise Tag Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Enterprise Tag Alias"
          ]
        }
      ]
    },
    {
      "monitoredEntity": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Site",
        "ccomClass": "SITE"
      },
      "tags": [
        {
          "name": "KbcTest1ForSandBoxEnvironment Site Tag Pressure",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Site.KbcTest1ForSandBoxEnvironment_Tag_Pressure",
          "description": "Site Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Site Tag Pressure Alias"
          ]
        }
      ]
    },
    {
      "monitoredEntity": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Segment-ID",
        "ccomClass": "ASSET"
      },
      "tags": [
        {
          "name": "KbcTest1ForSandBoxEnvironment Segment Tag name",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Segment-ID.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
        }
      ]
    },
    {
      "monitoredEntity": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID",
        "ccomClass": "ASSET"
      },
      "tags": [
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag Pressure name",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID.KbcTest1ForSandBoxEnvironment_Tag_Pressure_ID",
          "description": "Asset Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "properties": [
            {
              "id": "ch_attr_min",
              "type": "Character",
              "value": [
                "A"
              ]
            },
            {
              "id": "ch_attr_array",
              "type": "Character",
              "value": [
                "Z",
                "a",
                "v",
                "N",
                "q",
                "i"
              ]
            },
            {
              "id": "sh_attr_min",
              "type": "Short",
              "value": [
                -32768
              ]
            },
            {
              "id": "sh_attr_max",
              "type": "Short",
              "value": [
                32767
              ]
            },
            {
              "id": "sh_attr_array",
              "type": "Short",
              "value": [
                32767,
                300,
                600,
                90,
                158,
                -32768
              ]
            },
            {
              "id": "int_attr_min",
              "type": "Integer",
              "value": [
                -2147483648
              ]
            },
            {
              "id": "int_attr_max",
              "type": "Integer",
              "value": [
                2147483647
              ]
            },
            {
              "id": "int_attr_array",
              "type": "Integer",
              "value": [
                2147483647,
                200,
                -500,
                600,
                99999,
                -1452895
              ]
            },
            {
              "id": "fl_attr_min",
              "type": "Float",
              "value": [
                -3.4e+38
              ]
            },
            {
              "id": "fl_attr_max",
              "type": "Float",
              "value": [
                3.4e+38
              ]
            },
            {
             "id": "fl_attr_array",
              "type": "Float",
              "value": [
                3.4e+38,
                3.2e+38,
                3.1e+38
              ]
            },
            {
              "id": "dbl_attr_min",
              "type": "Double",
              "value": [
                -1.7e+308
              ]
            },
            {
              "id": "dbl_attr_max",
              "type": "Double",
              "value": [
                1.7e+308
              ]
            },
            {
              "id": "dbl_attr_array",
              "type": "Double",
              "value": [
                1.7e+308,
                1.6e+302,
                1.4e+302,
                1.1e+38
              ]
            },
            {
              "id": "bool_attr_true",
              "type": "Boolean",
              "value": [
                true
              ]
            },
            {
              "id": "bool_attr_fal",
              "type": "Boolean",
              "value": [
                false
              ]
            },
            {
              "id": "ts_attr",
              "type": "Timestamp",
              "value": [
                "07/15/2016 04:45:30"
              ]
            },
            {
              "id": "ts_attr_array",
              "type": "Timestamp",
              "value": [
                "07/15/2016 04:45:30",
                "07/16/2016 04:45:30",
                "08/20/2016 04:45:30",
                "09/21/2016 04:45:30"
              ]
            },
            {
              "id": "str_attr_min",
              "type": "String",
              "value": [
                "KbcTest1ForSandBoxEnvironment String"
              ]
            },
            {
              "id": "str_attr_array",
              "type": "String",
              "value": [
                "First",
                "Second",
                "Third",
                "Fourt"
              ]
            }
          ],
          "reservedProperties": {
            "status": "01",
            "uom": "psi",
            "dataType": "Double",
            "resolution": "7"
          },
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Pressure Alias"
          ]
        }
     ]
    },
     {
      "monitoredEntity": {
        "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template",
        "ccomClass": "ASSET"
      },
      "tags": [
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
         {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name2",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
         {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name3",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
         {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name4",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name5",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
         {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name6",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name7",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name8",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name9",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        },
        {
          "name": "KbcTest1ForSandBoxEnvironment Asset Tag name10",
          "id": "KbcTest1ForSandBoxEnvironment-CA-Asset-ID_Template.KbcTest1ForSandBoxEnvironment_Tag_Segment_ID",
          "description": "Segment Tag Pressure Descrpition",
          "classification": "KbcTest1ForSandBoxEnvironment_Tag_Type_Classification_ID",
          "aliases": [
            "KbcTest1ForSandBoxEnvironment Tag Segment Alias 1"
          ]
          
        }
        
      ]
    }
                ]
}
};

exports.eventhub_data;

exports.scheduler_variable = 0;