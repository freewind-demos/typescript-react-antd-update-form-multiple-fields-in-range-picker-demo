import React, {useEffect, useState} from 'react'
import {DatePicker, Form} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import moment from 'moment';

type FormData = {
  startDate?: string,
  closeDate?: string,
}

export default function Hello() {

  const [formData, setFormData] = useState<FormData>({
    startDate: '2020-01-02',
    closeDate: '2020-01-04'
  })

  const [form] = useForm<FormData>();

  useEffect(() => {
    console.log("### formData", formData);
    form.setFieldsValue(formData)
  }, [formData])

  return <Form form={form} onValuesChange={(_, values) => setFormData(values)}>
    <Form.Item>
      <DatePicker.RangePicker
        value={[
          formData?.startDate ? moment(formData.startDate, 'YYYY-MM-DD') : null,
          formData?.closeDate ? moment(formData.closeDate, 'YYYY-MM-DD') : null
        ]}
        onChange={(dates) => {
          setFormData(d => ({
            ...d,
            ...({
              startDate: dates?.[0]?.format('YYYY-MM-DD'),
              closeDate: dates?.[1]?.format('YYYY-MM-DD')
            })
          }))
        }}
      />
    </Form.Item>
    <hr/>
    <pre>{JSON.stringify(formData, null, 4)}</pre>
  </Form>
};
