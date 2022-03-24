import React from 'react'
import {DatePicker, Form} from 'antd';
import moment from 'moment';

export default function Hello() {
  return <Form initialValues={{
    startDate: '2020-01-02',
    closeDate: '2020-01-04'
  }}>
    <Form.Item shouldUpdate>
      {({ getFieldValue, setFieldsValue }) => (
        <DatePicker.RangePicker
          value={[
            getFieldValue("startDate") ? moment(getFieldValue("startDate"), 'YYYY-MM-DD') : null,
            getFieldValue("closeDate") ? moment(getFieldValue("closeDate"), 'YYYY-MM-DD') : null
          ]}
          onChange={(dates) => {
            setFieldsValue({
              startDate: dates?.[0]?.format('YYYY-MM-DD'),
              closeDate: dates?.[1]?.format('YYYY-MM-DD')
            })
          }}
        />
      )}
    </Form.Item>
    <hr/>
    <Form.Item shouldUpdate>
      {({ getFieldsValue }) => (
        <pre>{JSON.stringify(getFieldsValue(true), null, 4)}</pre>
      )}
    </Form.Item>
  </Form>
};
