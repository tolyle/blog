import { Button, Input, Tag, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import type { UploadProps } from 'antd';
import css from './index.css';
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import request from '@/lib/request';

const { Dragger } = Upload;

export default () => {
  const { CheckableTag } = Tag;

  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const props2: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload: (file) => {
      return false;
    },
  };

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files', file as RcFile);
    });
    formData.append('title', '这只是一个标题');
    formData.append('tags', '只是一个标签');

    request.post('/api/upload', {
      data: formData,
      requestType: 'form',
    });

    setUploading(true);
    // You can use any AJAX library you like
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setFileList([]);
    //     message.success('upload successfully.');
    //   })
    //   .catch(() => {
    //     message.error('upload failed.');
    //   })
    //   .finally(() => {
    //     setUploading(false);
    //   });
  };

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const tagInputStyle: React.CSSProperties = {
    width: 78,
    verticalAlign: 'top',
  };

  const tagPlusStyle: React.CSSProperties = {
    background: '#666',
    borderStyle: 'dashed',
  };

  return (
    <div className={css.box}>
      <p>1This is umi docs.</p>
      <p>2This is umi docs.</p>
      <p>3This is umi docs.</p>
      <p>4This is umi docs.</p>
      <p>This is umi docs.</p>
      <p>This is umi docs.</p>
      <Button type="primary">按钮</Button>

      <span style={{ marginRight: 8 }}>Categories:</span>
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
            {tag}
          </CheckableTag>
        ))}

        {inputVisible ? (
          <Input ref={inputRef} type="text" size="small" style={tagInputStyle} value={inputValue} onChange={handleInputChange} onBlur={handleInputConfirm} onPressEnter={handleInputConfirm} />
        ) : (
          <Tag style={tagPlusStyle} onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
      </Space>

      <Dragger {...props2}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
      </Dragger>

      <Button type="primary" onClick={handleUpload} disabled={fileList.length === 0} loading={uploading} style={{ marginTop: 16 }}>
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  );
};
