'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MarkdownRenderer from './MarkdownRenderer';

type ResponseProps = {
  responses: string[];
};

const Response: React.FC<ResponseProps> = ({ responses }) => {
  return (
    <div className="response-container mx-auto p-4 lg:p-8 xl:max-w-7xl mt-4 bg-white dark:bg-gray-800 shadow-md rounded-lg max-h-[44vh] overflow-y-auto contain-content w-full">
      {responses.map((response, index) => (
        <motion.div
          key={index}
          className="response-item mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <MarkdownRenderer markdown={response} />
        </motion.div>
      ))}
    </div>
  );
};

export default Response;