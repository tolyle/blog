import { Button, Input, Tag, Space, Form } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import css from './index.css';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import request from '@/lib/request';

import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { savePhoto } from '@/services/admin';

const { Dragger } = Upload;

export default () => {
  const { CheckableTag } = Tag;

  const tagsData = ['人像', '风光', '建筑', '城市', '活动', '美食', '宠物'];

  const [selectedTags, setSelectedTags] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
  const [percent, setPercent] = useState(1);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const [formInstance] = Form.useForm();

  const props: UploadProps = {
    multiple: true,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file, fileList1) => {
      console.log('选中的图片数量:' + fileList1.length);
      setFileList([...fileList, ...fileList1]);

      return false;
    },
    fileList,
  };

  onUploadProgress: (progressEvent: any) => {

    console.log(progressEvent);
    console.log(Math.round(progressEvent.loaded / progressEvent.total * 100));
  }
  const handleUpload = () => {
    console.log('要上传的文件数量' + fileList.length);

    //表单元素都通过验证后
    formInstance.validateFields().then((values) => {
      const formData = new FormData();

      fileList.forEach((file) => {
        formData.append('files', file as RcFile);
      });

      formData.append('title', values.title);
      formData.append('city', values.city);

      formData.append('tags', selectedTags);
      formData.append('spot', values.spot);
      setUploading(true);
      savePhoto(formData).then((res) => {
        if (res.code == 200) {
          message.success('保存成功');
          setUploading(false);
          setFileList([]);
        } else {
          message.error(res.statusText);
        }
      });
    });
  };

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const tagInputStyle: React.CSSProperties = {
    width: 78,
    verticalAlign: 'top',
  };

  const tagPlusStyle: React.CSSProperties = {
    background: '#666',
    borderStyle: 'dashed',
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [slist2, setSlist2] = useState<String[]>([]);

  const showModal = () => {
    setSlist2([...slist2, 's' + new Date()]);
  };

  const showModal1 = () => {
    console.log(slist2?.length);

    slist2.forEach((s) => {
      console.log(s);
    });
  };

  return (
    <div className={css.box}>
      <Form name="basic" form={formInstance} labelCol={{ span: 2 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item label="标题" name="title"   >
          <Input value='无标题' />
        </Form.Item>

        <Form.Item label="拍摄城市" name="city" rules={[{ required: true, message: '拍摄照片所在城市' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="景点" name="spot" rules={[{ required: true, message: '景点名称' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Tag" name="tag">
          <div>
            {tagsData.map((tag) => (
              <CheckableTag style={{ fontSize: 14 }} key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
                {tag}
              </CheckableTag>
            ))}
          </div>
        </Form.Item>

        <Upload {...props}>
          <Button icon={<UploadOutlined />}>选择照片</Button>
        </Upload>

        <Button type="primary" onClick={handleUpload} disabled={fileList.length === 0} loading={uploading} style={{ marginTop: 16 }}>
          {uploading ? '上传中' : '开始上传'}
        </Button>
      </Form>
    </div>
  );
};
