import { useState, useEffect, useContext } from 'react';
import { Typography } from 'antd';
import { GloablStateContext } from '@/context';
import { useTranslation } from '@/i18n/utils';

const { Text } = Typography;

export default function BaseInfo () {
  const [desc, setDesc] = useState('');
  const { editor } = useContext(GloablStateContext);
  const { t } = useTranslation();

  const handleChange = (v) => {
    const _v = v || t('header.fabritor_desc');
    setDesc(_v);
    if (!editor) return;
    const { sketch } = editor;
    // @ts-ignore custom desc
    sketch.set('fabritor_desc', _v);

    editor.fireCustomModifiedEvent();
  }

  useEffect(() => {
    if (!editor) return;
    const { sketch } = editor;
    // @ts-ignore custom desc
    setDesc(sketch.fabritor_desc);
  }, [editor?.sketch]);

  return (
    <div
      style={{ margin: 0, width: 200 }}
    >
      {/* 测量画板 */}
    </div>
  )
}