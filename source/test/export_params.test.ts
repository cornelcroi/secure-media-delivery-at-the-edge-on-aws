const exportParams = require('../lambda/export_params/index.js');

jest.mock("aws-sdk")

describe('process.env', () => {
  const env = process.env

  beforeEach(() => {
      jest.resetModules()
      process.env = {  
         SUBMIT_QUERY_FUNCTION: "myFunction"
       };
  })

  afterEach(() => {
      process.env = env
  })



  test('Export params - result OK', async () => {

    var result = await exportParams.handler(
      {
         "Records": [
             {                 
                 "dynamodb": {
                     "ApproximateCreationDateTime": 1658397975,
                     "Keys": {
                         "table_name": {
                             "S": "cloudfront_logs"
                         }
                     },
                     "NewImage": {
                         "score_threshold": {
                             "N": "2.2"
                         },
                         "ip_rate": {
                             "N": "1"
                         },
                         "lookback_period": {
                             "N": "12"
                         },
                         "min_sessions_number": {
                             "N": "3"
                         },
                         "partitioned": {
                             "N": "0"
                         },
                         "ua_column_name": {
                             "S": "useragent"
                         },
                         "response_bytes_column_name": {
                             "S": "bytes"
                         },
                         "ua_penalty": {
                             "N": "1"
                         },
                         "table_name": {
                             "S": "cloudfront_logs"
                         },
                         "uri_column_name": {
                             "S": "uri"
                         },
                         "request_ip_column": {
                             "S": "requestip"
                         },
                         "date_column_name": {
                             "S": "date"
                         },
                         "db_name": {
                             "S": "default"
                         },
                         "status_column_name": {
                             "S": "status"
                         },
                         "trigger_workflow_frequency": {
                             "N": "0"
                         },
                         "min_session_duration": {
                             "N": "30"
                         },
                         "referer_column_name": {
                             "S": "referrer"
                         },
                         "referer_penalty": {
                             "N": "1"
                         },
                         "time_column_name": {
                             "S": "time"
                         },
                         "ip_penalty": {
                             "N": "2"
                         }
                     }
                 }
             }
         ]
     }
    );

    expect(result).toEqual("OK");
      

  });

  test('Export params - invalid value for score_threshold', async () => {
   try{  
      var result = await exportParams.handler(
      {
         "Records": [
               {                 
                  "dynamodb": {
                     "ApproximateCreationDateTime": 1658397975,
                     "Keys": {
                           "table_name": {
                              "S": "cloudfront_logs"
                           }
                     },
                     "NewImage": {
                           "score_threshold": {
                              "N": "0.8"
                           },
                           "ip_rate": {
                              "N": "1"
                           },
                           "lookback_period": {
                              "N": "12"
                           },
                           "min_sessions_number": {
                              "N": "3"
                           },
                           "partitioned": {
                              "N": "0"
                           },
                           "ua_column_name": {
                              "S": "useragent"
                           },
                           "response_bytes_column_name": {
                              "S": "bytes"
                           },
                           "ua_penalty": {
                              "N": "1"
                           },
                           "table_name": {
                              "S": "cloudfront_logs"
                           },
                           "uri_column_name": {
                              "S": "uri"
                           },
                           "request_ip_column": {
                              "S": "requestip"
                           },
                           "date_column_name": {
                              "S": "date"
                           },
                           "db_name": {
                              "S": "default"
                           },
                           "status_column_name": {
                              "S": "status"
                           },
                           "trigger_workflow_frequency": {
                              "N": "0"
                           },
                           "min_session_duration": {
                              "N": "30"
                           },
                           "referer_column_name": {
                              "S": "referrer"
                           },
                           "referer_penalty": {
                              "N": "1"
                           },
                           "time_column_name": {
                              "S": "time"
                           },
                           "ip_penalty": {
                              "N": "2"
                           }
                     }
                  }
               }
         ]
      }
      );

} catch (e) {
   expect((e as Error).message).toBe("Event received must be an array with at least 2 elements");
 };
     

 });





})

