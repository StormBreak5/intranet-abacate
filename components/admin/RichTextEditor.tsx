'use client';

import {
    Editor,
    EditorProvider,
    BtnBold,
    BtnItalic,
    BtnStrikeThrough,
    BtnUnderline,
    BtnLink,
    BtnClearFormatting,
    BtnRedo,
    BtnUndo,
    BtnNumberedList,
    BtnBulletList,
    Toolbar,
    Separator
} from 'react-simple-wysiwyg';

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function RichTextEditor({ value, onChange, placeholder, className = '' }: Props) {
    return (
        <div className={`rich-text-editor ${className}`}>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    containerProps={{
                        style: {
                            minHeight: '300px',
                            borderRadius: '0.5rem',
                            border: '1px solid #e5e7eb',
                            backgroundColor: '#fff',
                        }
                    }}
                >
                    <Toolbar>
                        <BtnUndo />
                        <BtnRedo />
                        <Separator />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                        <BtnClearFormatting />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}
