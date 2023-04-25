import { BigQuery } from '@google-cloud/bigquery';

const main = async (): Promise<void> => {
    const bigquery = new BigQuery({ projectId: 'qt-enterprise-sit-8u', location: 'US' });
    const result = await bigquery.query({
      query:
        "SELECT COUNT(*) FROM enterprise_file_staging_raw.iceData WHERE partitionDate = CURRENT_DATE()",
    });

    console.log('----- result', result);
};

main();
