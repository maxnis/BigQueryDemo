import { BigQuery } from '@google-cloud/bigquery';

const main = async (): Promise<void> => {
    const bigquery = new BigQuery({ projectId: 'project id comes here', location: 'US' });
    const result = await bigquery.query({
      query:
        "SELECT COUNT(*) FROM dataset_name.table_name WHERE someDate = CURRENT_DATE()",
    });

    result[0].forEach(row => {
        console.log("-----> Row count:", row.f0_);        
    });
};

main();
