'use client';

import { Button } from '@/app/ui/button';
import { useRef } from 'react';
import { redirect } from 'next/navigation';
import Loading from '@/app/dashboard/(overview)/loading';

export default function Import() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  //create function to handle file upload
  const handleFileUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
      if (confirm('File uploaded successfully. Do you want to proceed?')) {
        const response = await fetch('/dashboard/customers/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload file');
        }else{
          alert('File uploaded successfully');
              
        }
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form className="space-y-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className='flex items-center space-x-6'>
        <div className="flex-1">
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="flex space-x-3">
          <Button
            type="button"
            onClick={handleButtonClick}
            className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-150 ease-in-out"
          >
            Select File
          </Button>
          <Button
            type="button"
            onClick={handleFileUpload}
            className="px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-150 ease-in-out"
          >
            Import
          </Button>
        </div>
      </div>
    </form>
  );
}
