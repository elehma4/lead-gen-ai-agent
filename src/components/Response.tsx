'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MarkdownRenderer from './MarkdownRenderer';

type ResponseProps = {
  responses: string[];
};

const Response: React.FC<ResponseProps> = ({ responses }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prevResponsesLength, setPrevResponsesLength] = useState(responses.length);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isScrolledToBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 1;
      
      if (responses.length > prevResponsesLength || isScrolledToBottom) {
        // Smooth scroll to bottom
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });

        // Animate the latest response
        if (responses.length > prevResponsesLength) {
          controls.start({
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.5 }
          });
        }
      }
    }
    setPrevResponsesLength(responses.length);
  }, [responses, prevResponsesLength, controls]);

  return (
    <div 
      ref={containerRef}
      className="response-container mx-auto p-4 lg:p-8 xl:max-w-7xl mt-4 bg-white dark:bg-gray-800 rounded-lg lg:min-h-[33vh] min-h-[29vh] max-h-[44vh] overflow-y-auto contain-content w-full"
    >
      {responses.map((response, index) => (
        <motion.div
          key={index}
          className="response-item mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={index === responses.length - 1 ? controls : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MarkdownRenderer markdown={response} />
        </motion.div>
      ))}
    </div>
  );
};

export default Response;